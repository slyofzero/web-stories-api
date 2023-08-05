import { Body, Controller, Get, Post } from '@nestjs/common';
import { StoryService } from './story.service';
import { CreateStoryDto } from './dto';

@Controller('story')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Get()
  getStory() {
    return this.storyService.getStory();
  }

  @Post()
  createStory(@Body() dto: CreateStoryDto) {
    return this.storyService.createStory(dto);
  }
}
