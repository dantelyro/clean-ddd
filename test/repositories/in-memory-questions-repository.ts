import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public items: Question[] = []

  async findBySlug(slug: string): Promise<Question | undefined> {
    return this.items.find((question) => question.slug.value === slug)
  }

  async create(question: Question): Promise<void> {
    this.items.push(question)
  }
}
