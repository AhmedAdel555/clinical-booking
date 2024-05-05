import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { User } from 'src/DB/Schemas/user.schema';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
    constructor(private schema: ZodSchema) { }

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