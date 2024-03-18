import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "./events.entity";

@Entity()
export class Auth {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, default: "user" })
  role: string;

  @OneToMany(() => Event, (event) => event.auth)
  event: Event[];
}
