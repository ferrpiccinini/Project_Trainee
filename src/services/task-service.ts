import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) {}
    createTask() {
        return "Task created successfully!";
    }
}