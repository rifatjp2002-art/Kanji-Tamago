export type MasteryLevel = 'easy' | 'medium' | 'hard' | 'unseen';

export interface UserProgressData {
  kanjiStatus: Record<string, MasteryLevel>; // kanjiId -> level
  lastLessonId: number;
  lastStudiedAt: string;
}

const STORAGE_KEY = 'kanji_tamago_progress_v1';

export function getProgress(): UserProgressData {
  if (typeof window === 'undefined') {
    return { kanjiStatus: {}, lastLessonId: 1, lastStudiedAt: '' };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load progress', e);
  }
  return { kanjiStatus: {}, lastLessonId: 1, lastStudiedAt: '' };
}

export function saveProgress(data: UserProgressData): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save progress', e);
  }
}

export function setKanjiMastery(kanjiId: string, level: MasteryLevel): UserProgressData {
  const current = getProgress();
  current.kanjiStatus[kanjiId] = level;
  current.lastStudiedAt = new Date().toISOString();
  saveProgress(current);
  return current;
}

export function setLastLesson(lessonId: number): void {
  const current = getProgress();
  current.lastLessonId = lessonId;
  current.lastStudiedAt = new Date().toISOString();
  saveProgress(current);
}

export function resetProgress(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
