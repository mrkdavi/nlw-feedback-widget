import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot}: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        // short syntax
        type,
        comment,
        screenshot,
  
        // the same as that
        // type: type,
        // comment: comment,
        // screenshot: screenshot,
      }
    })
  }
}