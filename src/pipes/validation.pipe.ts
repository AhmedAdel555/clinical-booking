import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ZodObject } from 'zod';

export class ZodValidationPipe implements PipeTransform {
    constructor(private schema: ZodObject<any>) { }

    transform(value: unknown, metadata: ArgumentMetadata) {
        console.log({
            value, metadata
        });

        try {
            this.schema.parse(value);
        } catch (error) {
            throw new BadRequestException(error);
        }
        return value;
    }
}