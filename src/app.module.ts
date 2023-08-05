import { Module } from '@nestjs/common';
import { StoryModule } from './story/story.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    StoryModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PrismaModule,
  ],
})
export class AppModule {}
