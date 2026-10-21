import React, { useState } from 'react';
import { CONFIG } from '../config';
import { StudentIdentity } from '../types';
import {
  User,
  Hash,
  ArrowRight,
  School,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  FileText,
  ShieldCheck,
  Award,
} from 'lucide-react';

interface Stage1IdentityProps {
  onStartExam: (identity: StudentIdentity) => void;
  initialIdentity?: StudentIdentity;
}

export const Stage1Identity: React.FC<Stage1IdentityProps> = ({
  onStartExam,
  initialIdentity,
}) => {
  const [nama, setNama] = useState(initialIdentity?.nama || '');
  const [noAbsen, setNoAbsen] = useState(initialIdentity?.noAbsen || '');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi data wajib diisi sesuai ketentuan
    if (!nama.trim()) {
      setErrorMessage('Silakan isi Nama Lengkap siswa terlebih dahulu.');
      return;
    }
    if (!noAbsen.trim()) {
      setErrorMessage('Silakan isi Nomor Absen siswa.');
      return;
    }

    setErrorMessage('');
    onStartExam({
      nama: nama.trim(),
      noAbsen: noAbsen.trim(),
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Header Pengumuman Tes */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
          <span>{CONFIG.SEKOLAH}</span>
          <span aria-hidden="true">·</span>
          <span>Kelas {CONFIG.KELAS}</span>
          <span aria-hidden="true">·</span>
          <span>KKTP {CONFIG.KKTP}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
          Tes Sumatif {CONFIG.MATA_PELAJARAN}
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Materi: <span className="font-semibold text-slate-800">{CONFIG.MATERI}</span>.
          Silakan masukkan identitas lengkap Anda sebelum menekan tombol Mulai Tes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Kolom Kiri: Form Identitas Siswa */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Tahap 1: Identitas Peserta Tes
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Kedua kolom di bawah ini wajib diisi sebelum melanjutkan ke soal tes
              </p>
            </div>
            <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              Tahap 1 dari 4
            </div>
          </div>

          {errorMessage && (
            <div className="mb-6 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2.5 animate-in fade-in duration-150">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span className="font-medium">{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama Lengkap Siswa */}
            <div>
              <label
                htmlFor="input-nama-lengkap"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                Nama Lengkap Siswa <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="input-nama-lengkap"
                  type="text"
                  value={nama}
                  onChange={(e) => {
                    setNama(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  placeholder="Contoh: I Putu Arya Wijaya"
                  autoFocus
                  className="w-full pl-10 pr-3.5 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                  required
                />
              </div>
            </div>

            {/* Nomor Absen Siswa */}
            <div>
              <label
                htmlFor="input-no-absen"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                Nomor Absen Siswa <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Hash className="w-4 h-4" />
                </div>
                <input
                  id="input-no-absen"
                  type="number"
                  min="1"
                  max="60"
                  value={noAbsen}
                  onChange={(e) => {
                    setNoAbsen(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  placeholder="Contoh: 12"
                  className="w-full pl-10 pr-3.5 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                  required
                />
              </div>
              <p className="mt-1.5 text-[11px] text-slate-400">
                Ketikkan nomor absen Anda sesuai daftar presensi kelas {CONFIG.KELAS}.
              </p>
            </div>

            {/* Tombol Mulai Tes */}
            <div className="pt-3">
              <button
                id="btn-mulai-tes"
                type="submit"
                className="w-full py-3.5 px-5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <span>Mulai Tes</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Kolom Kanan: Rincian Info Tes & Ketentuan */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xs border border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Komposisi & Ketentuan Tes</span>
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between bg-slate-800/90 p-3 rounded-xl border border-slate-700/80">
                <span>1. Pilihan Ganda (PG)</span>
                <span className="font-bold text-blue-300">25 Soal</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/90 p-3 rounded-xl border border-slate-700/80">
                <span>2. PGK Kategori (Benar / Salah)</span>
                <span className="font-bold text-amber-300">5 Soal</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/90 p-3 rounded-xl border border-slate-700/80">
                <span>3. Isian Singkat</span>
                <span className="font-bold text-emerald-300">5 Soal</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-slate-300 font-medium">
                <span>Total Butir Soal:</span>
                <span className="font-extrabold text-white text-sm">35 Butir</span>
              </div>
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span>Kriteria Ketuntasan (KKTP):</span>
                <span className="font-bold text-white text-xs">{CONFIG.KKTP} (Skala 100)</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-slate-400 space-y-2">
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Soal dan opsi jawaban diacak otomatis saat Anda memulai tes.</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Seluruh 35 soal wajib dijawab sebelum jawaban dapat dikirim.</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Hasil tes otomatis tersimpan ke rekapitulasi Google Spreadsheet sekolah.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
