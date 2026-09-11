import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ReviewsService } from './reviews.service.js';
import { CreateReviewDto } from './dto/create-review.dto.js';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  findAllForVendor(@Query('vendorId') vendorId: string) {
    return this.reviewsService.findAllForVendor(vendorId);
  }

  @Post()
  create(@Body() dto: CreateReviewDto) {
    return this.reviewsService.create(dto);
  }
}
