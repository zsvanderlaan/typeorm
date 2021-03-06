import {PrimaryColumn, Column} from "../../../src/columns";
import {Table} from "../../../src/tables";
import {VersionColumn} from "../../../src/decorator/columns/VersionColumn";

@Table("sample17_post")
export class Post {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @VersionColumn()
    version: number;
    
}