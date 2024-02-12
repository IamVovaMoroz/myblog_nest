import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
	findAll(): string[] {
		return ["dragons", "coffee", "services", "dom", "services"]
	}

}