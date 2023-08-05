import { Injectable } from '@nestjs/common';
import { CreateStoryDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StoryService {
  constructor(private prisma: PrismaService) {}

  async getStory() {
    const stories = this.prisma.story.findMany();
    return stories;
  }

  async createStory(dto: CreateStoryDto) {
    const { title, content } = dto;
    const story = await this.prisma.story.create({ data: { title, content } });

    return story;
  }
}
