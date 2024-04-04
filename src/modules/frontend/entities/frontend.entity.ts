import {randomUUID} from 'crypto';

export class Frontend {
  readonly id: string;
  title: string;
  image: string | null;
  url: string;
  github: string;
  description: string;

  constructor() {
    this.id = randomUUID();
  }
}
