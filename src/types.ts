/**
 * Definisi Type & Interface Aplikasi Tes Sumatif
 * Pendidikan Pancasila Kelas 4 - Bab 2 Aturan di Lingkungan Sekitar
 */

export type QuestionType = 'pg' | 'pgk_kategori' | 'isian' | 'pgk';
export type Difficulty = 'Mudah' | 'Sedang' | 'Sukar';

export interface StudentBirthDate {
  hari: string;
  bulan: string;
  tahun: string;
}

export interface StudentIdentity {
  nama: string;
  noAbsen: string;
  tglLahir?: StudentBirthDate;
}

export interface OptionItem {
  id: string; // e.g. 'A', 'B', 'C', 'D'
  text: string;
}

export interface StatementItem {
  id: string; // e.g. 's1', 's2', 's3'
  text: string;
  correctAnswer: boolean; // true = Benar, false = Salah
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  options?: OptionItem[]; // Untuk 'pg' (4 opsi) dan 'pgk'
  statements?: StatementItem[]; // Untuk 'pgk_kategori' (pernyataan Benar / Salah)
  correctAnswer?: string | string[]; // string untuk 'pg' (e.g. 'B') atau kunci utama isian
  acceptableAnswers?: string[]; // Variasi jawaban isian yang dapat diterima (lowercase trimmed)
  difficulty: Difficulty;
  explanation: string;
  topic: string;
}

export interface ShuffledQuestion extends Question {
  originalQuestionId: number;
  shuffledOptions?: OptionItem[];
}

export type AnswerValue = string | string[] | Record<string, boolean>;

export interface ExamResult {
  id?: string;
  timestamp: string;
  nama: string;
  noAbsen: string;
  kelas: string;
  tglLahir?: string;
  benar: number;
  salah: number;
  nilai: number;
  status: 'Lulus' | 'Belum Lulus';
  detailJawaban?: Record<number, AnswerValue>;
  mataPelajaran?: string;
}

export type AppStage = 1 | 2 | 3 | 4;
