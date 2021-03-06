import {PrimaryColumn, Column} from "../../../src/columns";
import {Table} from "../../../src/tables";
import {Author} from "./Author";
import {ManyToOne} from "../../../src/decorator/relations/ManyToOne";
import {Category} from "./Category";
import {ManyToMany} from "../../../src/decorator/relations/ManyToMany";
import {JoinTable} from "../../../src/decorator/relations/JoinTable";
import {OneToOne} from "../../../src/decorator/relations/OneToOne";
import {JoinColumn} from "../../../src/decorator/relations/JoinColumn";
import {PostMetadata} from "./PostMetadata";

@Table("sample19_post")
export class Post {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToOne(type => Author, { cascadeAll: true })
    author: Author;

    @ManyToMany(type => Category, { cascadeAll: true })
    @JoinTable()
    categories: Category[];

    @OneToOne(type => PostMetadata, { cascadeAll: true })
    @JoinColumn()
    metadata: PostMetadata;

}