import { Controller, Get } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Controller('heavy-job')
export class HeavyJobController {
  constructor(@InjectQueue('heavy-job') private heavyJobQueue: Queue) {}

  @Get()
  async index(): Promise<string> {
    await this.heavyJobQueue.add({
      message: 'Some heavy job',
    });

    return 'Try reload page few times for adding heavy job, and check your terminal.';
  }
}
