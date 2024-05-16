import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import React from "react";

const InterceptedImagePage = async ({ params }: any) => {
  const newsItemSlug = params.slug;

  const newsItem: any = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />{" "}
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
