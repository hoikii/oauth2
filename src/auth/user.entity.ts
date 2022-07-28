import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  uid: number

  @Column()
  nickname: string

  @Column({ nullable: true })
  RefreshToken: string
}
