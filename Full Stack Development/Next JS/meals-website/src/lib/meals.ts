import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
// import fs from "node:fs";
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({
  region: "us-east-1",
});

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  // throw new Error("Error to fetch the meal data");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug: any) {
  return db.prepare("SELECT * FROM meals WHERE slug = ? ").get(slug);
}

export async function saveMeal(meal: any) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();

  const fileName = `${meal.slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();

  // const stream = fs.createWriteStream(`public/images/${fileName}`);
  // stream.write(Buffer.from(bufferedImage), (error) => {
  //   if (error) {
  //     throw new Error("Saving image failed!");
  //   }
  // });

  s3.putObject({
    Bucket: "nimit-patel-nextjs-meals-website-images",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  meal.image = fileName;

  return db
    .prepare(
      `INSERT INTO meals 
        (title, summary, instructions, image, creator, creator_email, slug) 
      VALUES (
        @title,
        @summary,
        @instructions,
        @image,
        @creator,
        @creator_email,
        @slug
      )`
    )
    .run(meal);
}
