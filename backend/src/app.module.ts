import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { UsersModule } from './modules/users/users.module.js';
import { VendorsModule } from './modules/vendors/vendors.module.js';
import { BookingsModule } from './modules/bookings/bookings.module.js';
import { ReviewsModule } from './modules/reviews/reviews.module.js';

@Module({
  imports: [PrismaModule, UsersModule, VendorsModule, BookingsModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
