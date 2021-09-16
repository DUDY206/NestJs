import { type } from "os";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity";
// @Entity('coffee')
@Entity()
export class Coffee {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    brand: string;
    
    @Column({default: 0})
    recommendation: number;

    @JoinTable()
    @ManyToMany(
        type => Flavor,
        flavor =>  flavor.coffees,
        {
            cascade: true, //insert
        }
    )
    flavors: Flavor[];
}