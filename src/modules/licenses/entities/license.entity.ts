import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Repository } from 'src/modules/repositories/entities/repository.entity';

@Entity({
  name: 'license',
})
export class License {
  @PrimaryColumn({
    name: 'key',
    type: 'varchar',
  })
  key: string;

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string;

  @Column({
    name: 'spdx_id',
    type: 'varchar',
  })
  spdx_id: string;

  @Column({
    name: 'url',
    type: 'varchar',
  })
  url: string;

  @Column({
    name: 'node_id',
    type: 'varchar',
  })
  node_id: string;

  @OneToMany(() => Repository, (repository) => repository.license)
  repositories: Repository[];

  constructor(license?: Partial<License>) {
    this.key = license?.key;
    this.name = license?.name;
    this.spdx_id = license?.spdx_id;
    this.url = license?.url;
    this.node_id = license?.node_id;
  }
}
