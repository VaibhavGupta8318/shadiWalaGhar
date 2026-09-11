import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateReviewDto } from './dto/create-review.dto.js';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForVendor(vendorId: string) {
    return this.prisma.review.findMany({ where: { vendorId } });
  }

  create(dto: CreateReviewDto) {
    return this.prisma.review.create({ data: dto });
  }
}
