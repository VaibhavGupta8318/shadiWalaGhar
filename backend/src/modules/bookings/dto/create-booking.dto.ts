import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsDateString()
  eventDate!: string;

  @IsString()
  userId!: string;

  @IsString()
  vendorId!: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
