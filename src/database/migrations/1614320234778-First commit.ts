import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstCommit1614320234778 implements MigrationInterface {
    name = 'FirstCommit1614320234778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_type" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, CONSTRAINT "PK_e0843930fbb8854fe36ca39dae1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "photo" character varying(256) NOT NULL, "active" boolean DEFAULT true, "count" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "types" ("productId" integer NOT NULL, "productTypeId" integer NOT NULL, CONSTRAINT "PK_503112c2941b997fca549c7b4c9" PRIMARY KEY ("productId", "productTypeId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5a39fe6a922f5ffe0fe7f14fd5" ON "types" ("productId") `);
        await queryRunner.query(`CREATE INDEX "IDX_681b61f102d80c674ed11583a1" ON "types" ("productTypeId") `);
        await queryRunner.query(`ALTER TABLE "types" ADD CONSTRAINT "FK_5a39fe6a922f5ffe0fe7f14fd57" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "types" ADD CONSTRAINT "FK_681b61f102d80c674ed11583a19" FOREIGN KEY ("productTypeId") REFERENCES "product_type"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "types" DROP CONSTRAINT "FK_681b61f102d80c674ed11583a19"`);
        await queryRunner.query(`ALTER TABLE "types" DROP CONSTRAINT "FK_5a39fe6a922f5ffe0fe7f14fd57"`);
        await queryRunner.query(`DROP INDEX "IDX_681b61f102d80c674ed11583a1"`);
        await queryRunner.query(`DROP INDEX "IDX_5a39fe6a922f5ffe0fe7f14fd5"`);
        await queryRunner.query(`DROP TABLE "types"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "product_type"`);
    }

}
