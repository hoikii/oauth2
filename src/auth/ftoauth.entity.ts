import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class FtOauth {
  @JoinColumn()
  @OneToOne((type) => type.uid)
  uid: number;

  @PrimaryColumn()
  id: number;

  @Column()
  access_token: string;

  @Column()
  refresh_token: string;
}