import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Exclude } from 'class-transformer';

// eslint-disable-next-line no-shadow
export enum Role {
  MANAGER = 'Manager',
  EMPLOYEE = 'Employee',
}

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
  })
  role: Role;

  @Column()
  managerId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'managerId' })
  manager: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
