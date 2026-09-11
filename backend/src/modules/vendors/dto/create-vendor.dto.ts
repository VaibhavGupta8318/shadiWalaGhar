import { IsOptional, IsString } from 'class-validator';

export class CreateVendorDto {
  @IsString()
  businessName!: string;

  @IsString()
  category!: string;

  @IsString()
  city!: string;

  @IsString()
  userId!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  priceRange?: string;
}
