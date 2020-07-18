import { Injectable, Logger } from '@nestjs/common';
import { Job } from 'bull';

@Injectable()
export class HeavyJobService {
  private readonly logger = new Logger(HeavyJobService.name);

  async doHeavyJob(job: Job): Promise<void> {
    this.logger.debug(`Start some heavy job. Job ID ${job.id}...`);
    this.logger.debug(job.data);
    this.logger.debug(`Worker PID: ${process.pid}`);
    // Heavy job which stop execution proccess on 4 seconds.
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 4000);
    this.logger.debug('Stop some heavy job...');
  }
}
