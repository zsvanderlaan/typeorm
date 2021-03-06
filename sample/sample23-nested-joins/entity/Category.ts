import {PrimaryColumn, Column} from "../../../src/columns";
import {Table} from "../../../src/tables";
import {Author} from "./Author";
import {ManyToMany} from "../../../src/decorator/relations/ManyToMany";
import {JoinTable} from "../../../src/decorator/relations/JoinTable";

@Table("sample23_category")
export class Category {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    name: string;
    
    @ManyToMany(type => Author)
    @JoinTable()
    author: Author;

}