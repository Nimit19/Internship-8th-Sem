import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column()
  imageUrl: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;
}
