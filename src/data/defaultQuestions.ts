import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (25 BUTIR SOAL)
  // Materi: Bab 2 Aturan di Lingkungan Sekitar - Kelas 4
  // =========================================================================

  // Soal 1: Pengertian Aturan
  {
    id: 1,
    type: 'pg',
    topic: 'Pengertian Aturan',
    difficulty: 'Mudah',
    text: 'Ketentuan atau petunjuk yang dibuat untuk mengatur tingkah laku manusia dalam kehidupan bermasyarakat agar tercipta ketertiban disebut...',
    options: [
      { id: 'A', text: 'Aturan atau norma' },
      { id: 'B', text: 'Hak istimewa' },
      { id: 'C', text: 'Saran bebas' },
      { id: 'D', text: 'Pujian bersama' },
    ],
    correctAnswer: 'A',
    explanation:
      'Aturan atau norma adalah ketentuan atau kaidah yang mengikat warga kelompok dalam masyarakat yang dipakai sebagai panduan, tatanan, dan pengendali tingkah laku yang sesuai dan berterima.',
  },

  // Soal 2: Macam Norma - Norma Agama
  {
    id: 2,
    type: 'pg',
    topic: 'Norma Agama',
    difficulty: 'Mudah',
    text: 'Sebelum makan dan memulai kegiatan belajar di kelas, Bu Guru mengajak semua siswa untuk berdoa sesuai dengan agama dan kepercayaannya masing-masing. Kebiasaan berdoa ini merupakan pengamalan dari norma...',
    options: [
      { id: 'A', text: 'Norma hukum' },
      { id: 'B', text: 'Norma agama' },
      { id: 'C', text: 'Norma kesopanan' },
      { id: 'D', text: 'Norma kebiasaan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma agama bersumber dari wahyu Tuhan Yang Maha Esa yang mengatur hubungan manusia dengan Tuhan, sesama manusia, dan alam. Berdoa sebelum beraktivitas adalah contoh pengamalan norma agama.',
  },

  // Soal 3: Macam Norma - Norma Kesusilaan
  {
    id: 3,
    type: 'pg',
    topic: 'Norma Kesusilaan',
    difficulty: 'Sedang',
    text: 'Edo menemukan uang Rp20.000,00 yang terjatuh di halaman sekolah. Edo langsung membawanya ke ruang guru piket untuk diumumkan kepada pemiliknya. Sikap jujur Edo tersebut didorong oleh norma kesusilaan yang bersumber dari...',
    options: [
      { id: 'A', text: 'Undang-undang resmi pemerintah' },
      { id: 'B', text: 'Hati nurani dan kalbu manusia' },
      { id: 'C', text: 'Kesepakatan warga rukun tetangga' },
      { id: 'D', text: 'Peraturan dari kepala sekolah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma kesusilaan bersumber dari hati nurani manusia mengenai apa yang baik dan buruk. Orang yang jujur dan mengembalikan barang milik orang lain didorong oleh bisikan hati nuraninya.',
  },

  // Soal 4: Macam Norma - Norma Kesopanan
  {
    id: 4,
    type: 'pg',
    topic: 'Norma Kesopanan',
    difficulty: 'Mudah',
    text: 'Ketika bertemu dengan bapak atau ibu guru di jalan, sikap sopan yang sebaiknya dilakukan oleh siswa kelas 4 adalah...',
    options: [
      { id: 'A', text: 'Pura-pura tidak melihat dan berlari' },
      { id: 'B', text: 'Menyapa dengan ramah sambil tersenyum' },
      { id: 'C', text: 'Menundukkan kepala sambil bersembunyi' },
      { id: 'D', text: 'Meneriaki guru dengan suara keras' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menyapa guru dengan ramah dan tersenyum merupakan wujud penerapan norma kesopanan yang bersumber dari tata krama pergaulan hidup bermasyarakat.',
  },

  // Soal 5: Macam Norma - Norma Hukum
  {
    id: 5,
    type: 'pg',
    topic: 'Norma Hukum',
    difficulty: 'Sedang',
    text: 'Ciri utama norma hukum yang membedakannya secara tegas dari norma lainnya adalah...',
    options: [
      { id: 'A', text: 'Sanksinya berupa perasaan malu dan bersalah' },
      { id: 'B', text: 'Sifatnya mengikat dan sanksinya tegas serta nyata dari aparat penegak hukum' },
      { id: 'C', text: 'Berasal dari kebiasaan turun-temurun antartetangga' },
      { id: 'D', text: 'Hanya berlaku bagi anak-anak usia sekolah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma hukum dibuat oleh lembaga berwenang (negara/pemerintah), bersifat mengikat secara menyeluruh, serta memiliki sanksi yang tegas, nyata, dan memaksa seperti denda atau kurungan.',
  },

  // Soal 6: Aturan Tertulis
  {
    id: 6,
    type: 'pg',
    topic: 'Bentuk Aturan',
    difficulty: 'Mudah',
    text: 'Berikut ini merupakan contoh aturan tertulis yang biasanya dipajang di dinding sekolah adalah...',
    options: [
      { id: 'A', text: 'Mengucapkan permisi saat lewat di depan orang tua' },
      { id: 'B', text: 'Tata tertib siswa dan jadwal piket kebersihan kelas' },
      { id: 'C', text: 'Membantu tetangga memindahkan meja' },
      { id: 'D', text: 'Makan menggunakan tangan kanan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tata tertib sekolah dan jadwal piket merupakan aturan tertulis karena dicatat, dibukukan, atau dipajang secara resmi sebagai pedoman yang wajib dipatuhi.',
  },

  // Soal 7: Aturan Tidak Tertulis
  {
    id: 7,
    type: 'pg',
    topic: 'Bentuk Aturan',
    difficulty: 'Sedang',
    text: 'Contoh aturan tidak tertulis yang hidup dan berkembang dalam kebiasaan masyarakat kita adalah...',
    options: [
      { id: 'A', text: 'Undang-Undang Lalu Lintas Jalan Raya' },
      { id: 'B', text: 'Peraturan Daerah tentang Izin Mendirikan Bangunan' },
      { id: 'C', text: 'Mengetuk pintu dan mengucap salam sebelum masuk ke rumah tetangga' },
      { id: 'D', text: 'Tata tertib ujian sumatif semester' },
    ],
    correctAnswer: 'C',
    explanation:
      'Mengetuk pintu dan mengucap salam merupakan norma kesopanan dan adat kebiasaan (aturan tidak tertulis) yang disepakati bersama dalam pergaulan masyarakat.',
  },

  // Soal 8: Aturan di Lingkungan Rumah
  {
    id: 8,
    type: 'pg',
    topic: 'Aturan di Rumah',
    difficulty: 'Mudah',
    text: 'Setiap pagi setelah bangun tidur, hal baik yang mencerminkan ketaatan terhadap aturan di rumah adalah...',
    options: [
      { id: 'A', text: 'Merapikan tempat tidur dan membuka jendela kamar' },
      { id: 'B', text: 'Langsung menyalakan televisi dengan volume tinggi' },
      { id: 'C', text: 'Membiarkan selimut berantakan di lantai' },
      { id: 'D', text: 'Bermain telepon pintar hingga terlambat sarapan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Merapikan tempat tidur sendiri adalah salah satu aturan penting di rumah yang melatih kemandirian, tanggung jawab, dan kebersihan diri anak.',
  },

  // Soal 9: Aturan Belajar di Rumah
  {
    id: 9,
    type: 'pg',
    topic: 'Aturan di Rumah',
    difficulty: 'Mudah',
    text: 'Keluarga Dayu membuat kesepakatan bersama bahwa pukul 19.00 sampai 20.30 adalah jam belajar di rumah. Manfaat dari mematuhi aturan tersebut adalah...',
    options: [
      { id: 'A', text: 'Membuat Dayu merasa tertekan dan tidak bisa bermain' },
      { id: 'B', text: 'Membantu Dayu belajar dengan lebih teratur dan disiplin' },
      { id: 'C', text: 'Supaya Dayu mendapat uang saku lebih banyak' },
      { id: 'D', text: 'Membatasi Dayu untuk berkomunikasi dengan orang tua' },
    ],
    correctAnswer: 'B',
    explanation:
      'Adanya jam belajar di rumah membantu anak mengelola waktu dengan disiplin dan teratur, sehingga materi pelajaran dapat dipahami dengan optimal.',
  },

  // Soal 10: Aturan di Lingkungan Sekolah
  {
    id: 10,
    type: 'pg',
    topic: 'Aturan di Sekolah',
    difficulty: 'Mudah',
    text: 'Aturan penggunaan seragam di SD Negeri 3 Loloan Timur mewajibkan siswa memakai pakaian seragam yang rapi dan atribut lengkap pada saat upacara bendera. Tujuan utama aturan tersebut adalah...',
    options: [
      { id: 'A', text: 'Membedakan siswa yang kaya dan yang sederhana' },
      { id: 'B', text: 'Menanamkan rasa disiplin, persatuan, dan kerapian' },
      { id: 'C', text: 'Memberikan beban tambahan bagi orang tua siswa' },
      { id: 'D', text: 'Menghabiskan waktu persiapan sebelum upacara' },
    ],
    correctAnswer: 'B',
    explanation:
      'Penggunaan seragam lengkap bertujuan menumbuhkan kedisiplinan, rasa kebersamaan tanpa membeda-bedakan status sosial, serta kerapian di lingkungan sekolah.',
  },

  // Soal 11: Aturan di Lingkungan Sekolah - Piket
  {
    id: 11,
    type: 'pg',
    topic: 'Aturan di Sekolah',
    difficulty: 'Sedang',
    text: 'Lani mendapat jadwal piket kelas pada hari Rabu. Sikap yang mencerminkan tanggung jawab terhadap aturan piket adalah...',
    options: [
      { id: 'A', text: 'Datang lebih awal untuk menyapu dan membersihkan papan tulis bersama regu piket' },
      { id: 'B', text: 'Menyuruh teman sekelas lain menggantikan tugasnya' },
      { id: 'C', text: 'Menunggu bel masuk baru mulai mencari sapu' },
      { id: 'D', text: 'Pulang terlebih dahulu saat pelajaran telah selesai' },
    ],
    correctAnswer: 'A',
    explanation:
      'Datang lebih awal dan melaksanakan tugas piket dengan sungguh-sungguh merupakan wujud tanggung jawab dan kepatuhan terhadap aturan sekolah.',
  },

  // Soal 12: Aturan di Lingkungan Masyarakat - Bertetangga
  {
    id: 12,
    type: 'pg',
    topic: 'Aturan di Masyarakat',
    difficulty: 'Sedang',
    text: 'Saat tetangga di sebelah rumah sedang ada anggota keluarga yang sakit parah, aturan kesopanan dan tenggang rasa di masyarakat mengharuskan kita untuk...',
    options: [
      { id: 'A', text: 'Memutar musik dengan pengeras suara di halaman' },
      { id: 'B', text: 'Menjaga ketenangan dan tidak membuat keributan di dekat rumahnya' },
      { id: 'C', text: 'Bermain bola di depan teras rumah tetangga tersebut' },
      { id: 'D', text: 'Mengabaikan keadaan dan tetap berteriak saat bermain' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menjaga ketenangan dan tidak berisik di dekat rumah tetangga yang sedang sakit adalah bentuk tenggang rasa, kepedulian, dan penerapan norma kesopanan.',
  },

  // Soal 13: Gotong Royong Warga
  {
    id: 13,
    type: 'pg',
    topic: 'Aturan di Masyarakat',
    difficulty: 'Mudah',
    text: 'Di lingkungan RT tempat tinggal Made diadakan kerja bakti membersihkan selokan setiap hari Minggu pagi. Peran yang dapat dilakukan anak usia kelas 4 untuk mendukung aturan lingkungan tersebut adalah...',
    options: [
      { id: 'A', text: 'Mengeruk selokan yang dalam sendirian' },
      { id: 'B', text: 'Membantu menyapu daun kering dan membuang sampah ringan ke tempatnya' },
      { id: 'C', text: 'Tidur di kamar hingga kerja bakti selesai' },
      { id: 'D', text: 'Menonton dari kejauhan sambil bermain gim di gawai' },
    ],
    correctAnswer: 'B',
    explanation:
      'Anak kelas 4 dapat berpartisipasi sesuai kemampuan usianya, misalnya membantu menyapu halaman, mengumpulkan sampah kering, atau membantu membagikan minuman.',
  },

  // Soal 14: Hak Anak di Rumah
  {
    id: 14,
    type: 'pg',
    topic: 'Hak dan Kewajiban',
    difficulty: 'Mudah',
    text: 'Sesuatu yang mutlak menjadi milik seseorang dan penggunaannya tergantung kepada orang tersebut disebut hak. Contoh hak yang berhak diterima anak di rumah adalah...',
    options: [
      { id: 'A', text: 'Mendapat kasih sayang, perlindungan, dan makanan bergizi dari orang tua' },
      { id: 'B', text: 'Membeli barang mewah apapun yang diinginkan tanpa batas' },
      { id: 'C', text: 'Bebas bermain semalaman tanpa belajar' },
      { id: 'D', text: 'Menyuruh adik mengerjakan tugas sekolahnya' },
    ],
    correctAnswer: 'A',
    explanation:
      'Hak anak di rumah antara lain mendapatkan kasih sayang, perlindungan dari bahaya, pemenuhan kebutuhan dasar (makanan sehat, pakaian, tempat tinggal layak), dan bimbingan orang tua.',
  },

  // Soal 15: Kewajiban Anak di Rumah
  {
    id: 15,
    type: 'pg',
    topic: 'Hak dan Kewajiban',
    difficulty: 'Mudah',
    text: 'Sesuatu yang harus dikerjakan dengan penuh rasa tanggung jawab disebut kewajiban. Contoh kewajiban anak terhadap orang tua di rumah adalah...',
    options: [
      { id: 'A', text: 'Menuntut uang saku yang banyak' },
      { id: 'B', text: 'Menghormati orang tua dan membantu pekerjaan rumah sesuai kemampuan' },
      { id: 'C', text: 'Menentukan menu makanan keluarga setiap hari' },
      { id: 'D', text: 'Mengatur keuangan belanja rumah tangga' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menghormati orang tua, berkata sopan, dan membantu pekerjaan ringan di rumah (seperti menyapu dan merapikan mainan) merupakan kewajiban utama anak di rumah.',
  },

  // Soal 16: Keseimbangan Hak dan Kewajiban
  {
    id: 16,
    type: 'pg',
    topic: 'Hak dan Kewajiban',
    difficulty: 'Sedang',
    text: 'Dalam kehidupan sehari-hari, hubungan antara pelaksanaan hak dan kewajiban harus dilaksanakan secara seimbang, artinya...',
    options: [
      { id: 'A', text: 'Kita harus menuntut hak terlebih dahulu sebelum melakukan kewajiban' },
      { id: 'B', text: 'Kita harus mendahulukan kewajiban dengan tanggung jawab baru menuntut hak' },
      { id: 'C', text: 'Kewajiban boleh diabaikan jika hak sudah kita terima' },
      { id: 'D', text: 'Hak hanya diberikan kepada orang yang memiliki jabatan tinggi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Keseimbangan hak dan kewajiban berarti kita harus mendahulukan pelaksanaan kewajiban dengan penuh tanggung jawab sebelum menuntut pemenuhan hak.',
  },

  // Soal 17: Hak Anak di Sekolah
  {
    id: 17,
    type: 'pg',
    topic: 'Hak di Sekolah',
    difficulty: 'Mudah',
    text: 'Beni adalah siswa kelas 4 di SD Negeri 3 Loloan Timur. Hak Beni saat berada di sekolah adalah...',
    options: [
      { id: 'A', text: 'Mencoret-coret meja dan dinding perpustakaan' },
      { id: 'B', text: 'Mendapatkan pengajaran, bimbingan, dan perlakuan adil dari guru' },
      { id: 'C', text: 'Meninggalkan kelas sesuka hati saat guru sedang mengajar' },
      { id: 'D', text: 'Menggunakan lapangan olahraga sendirian tanpa berbagi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Setiap siswa berhak memperoleh pendidikan yang layak, perlakuan adil tanpa diskriminasi, bimbingan ilmu pengetahuan, serta menggunakan sarana belajar sekolah.',
  },

  // Soal 18: Kewajiban terhadap Fasilitas Umum
  {
    id: 18,
    type: 'pg',
    topic: 'Aturan Fasilitas Umum',
    difficulty: 'Sedang',
    text: 'Di taman bermain lingkungan sekitar terdapat ayunan, perosotan, dan tempat duduk umum. Kewajiban kita saat menggunakan fasilitas umum tersebut adalah...',
    options: [
      { id: 'A', text: 'Menggunakan fasilitas dengan tertib, bergantian, dan menjaga kebersihannya' },
      { id: 'B', text: 'Menuliskan nama kita menggunakan spidol permanen di tiang ayunan' },
      { id: 'C', text: 'Menguasai mainan sepanjang hari agar teman lain tidak bisa memakai' },
      { id: 'D', text: 'Membuang bungkus makanan ringan di bawah bangku taman' },
    ],
    correctAnswer: 'A',
    explanation:
      'Fasilitas umum adalah milik bersama. Setiap warga wajib merawat, menjaga kebersihan, tidak merusak (vandalisme), serta antre menggunakan dengan tertib.',
  },

  // Soal 19: Musyawarah dalam Membuat Aturan
  {
    id: 19,
    type: 'pg',
    topic: 'Musyawarah Lingkungan',
    difficulty: 'Sedang',
    text: 'Saat warga kelas 4 ingin menyusun jadwal kebersihan kelas dan tata tertib regu piket, cara terbaik yang sesuai dengan sila keempat Pancasila adalah...',
    options: [
      { id: 'A', text: 'Ketua kelas memutuskan sendiri tanpa meminta pendapat teman lain' },
      { id: 'B', text: 'Bermusyawarah bersama seluruh teman sekelas untuk mencapai mufakat' },
      { id: 'C', text: 'Menentukan jadwal berdasarkan siswa yang paling ditakuti' },
      { id: 'D', text: 'Menyerahkan seluruh tugas piket kepada siswa yang paling pendiam' },
    ],
    correctAnswer: 'B',
    explanation:
      'Musyawarah untuk mufakat adalah cara terbaik dalam mengambil keputusan bersama di kelas sesuai dengan nilai-nilai luhur Pancasila sila ke-4.',
  },

  // Soal 20: Sikap terhadap Keputusan Musyawarah
  {
    id: 20,
    type: 'pg',
    topic: 'Musyawarah Lingkungan',
    difficulty: 'Sedang',
    text: 'Setelah musyawarah kelas selesai dan aturan disepakati bersama, sikap yang wajib ditunjukkan oleh seluruh siswa adalah...',
    options: [
      { id: 'A', text: 'Menolak aturan jika pendapat pribadinya tidak diterima' },
      { id: 'B', text: 'Melaksanakan keputusan bersama tersebut dengan ikhlas dan penuh tanggung jawab' },
      { id: 'C', text: 'Pura-pura lupa terhadap hasil musyawarah yang telah disepakati' },
      { id: 'D', text: 'Mencela teman yang memberikan usulan saat musyawarah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Semua peserta musyawarah berkewajiban menghormati dan melaksanakan hasil keputusan bersama dengan iktikad baik dan rasa tanggung jawab, meskipun usul pribadinya berbeda.',
  },

  // Soal 21: Manfaat Menaati Aturan
  {
    id: 21,
    type: 'pg',
    topic: 'Manfaat Aturan',
    difficulty: 'Mudah',
    text: 'Jika seluruh warga di lingkungan sekitar selalu mematuhi aturan jam malam dan tamu wajib lapor 1x24 jam, maka suasana lingkungan akan menjadi...',
    options: [
      { id: 'A', text: 'Kacau, menegangkan, dan sering terjadi perselisihan' },
      { id: 'B', text: 'Aman, tenteram, nyaman, dan terhindar dari gangguan kejahatan' },
      { id: 'C', text: 'Sepi dan warga tidak boleh saling mengenal' },
      { id: 'D', text: 'Penuh rasa curiga antarwarga tetangga' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mematuhi aturan keamanan lingkungan membuat suasana tempat tinggal menjadi aman, tertib, damai, dan terhindar dari potensi tindak kejahatan.',
  },

  // Soal 22: Akibat Melanggar Aturan di Jalan Raya
  {
    id: 22,
    type: 'pg',
    topic: 'Akibat Melanggar Aturan',
    difficulty: 'Mudah',
    text: 'Seorang pengendara sepeda motor menerobos lampu merah di perempatan jalan. Akibat berbahaya yang dapat terjadi dari pelanggaran norma hukum lalu lintas tersebut adalah...',
    options: [
      { id: 'A', text: 'Jalan raya menjadi lebih lancar dan lengang' },
      { id: 'B', text: 'Dapat menyebabkan kecelakaan yang membahayakan diri sendiri dan pengguna jalan lain' },
      { id: 'C', text: 'Pengendara mendapat hadiah dari petugas kepolisian' },
      { id: 'D', text: 'Waktu tempuh semua kendaraan menjadi lebih cepat' },
    ],
    correctAnswer: 'B',
    explanation:
      'Melanggar rambu lalu lintas berisiko fatal memicu tabrakan/kecelakaan yang mencelakai diri sendiri dan orang lain serta terkena sanksi hukum dari polisi.',
  },

  // Soal 23: Sanksi Norma Kesopanan
  {
    id: 23,
    type: 'pg',
    topic: 'Sanksi Norma',
    difficulty: 'Sukar',
    text: 'Seseorang yang sering berkata kotor, menyela pembicaraan orang yang lebih tua, dan tidak sopan dalam pergaulan di desanya biasanya akan mendapatkan sanksi sosial berupa...',
    options: [
      { id: 'A', text: 'Hukuman kurungan penjara selama lima tahun' },
      { id: 'B', text: 'Teguran, celaan, atau dijauhi oleh teman dan warga sekitar' },
      { id: 'C', text: 'Denda uang tunai ratusan juta rupiah' },
      { id: 'D', text: 'Penyitaan seluruh harta benda miliknya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sanksi pelanggaran norma kesopanan tidak berupa hukuman pidana penjara, melainkan sanksi sosial seperti teguran, rasa malu, celaan, atau dijauhi dari pergaulan masyarakat.',
  },

  // Soal 24: Menghargai Keragaman Norma Adat
  {
    id: 24,
    type: 'pg',
    topic: 'Norma di Masyarakat',
    difficulty: 'Sedang',
    text: 'Di Indonesia setiap daerah memiliki adat istiadat dan aturan kebiasaan masing-masing. Sikap kita saat berkunjung ke daerah lain yang memiliki aturan adat berbeda adalah...',
    options: [
      { id: 'A', text: 'Memaksakan kebiasaan daerah asal kita kepada warga setempat' },
      { id: 'B', text: 'Menghormati dan mematuhi aturan adat setempat ("di mana bumi dipijak, di situ langit dijunjung")' },
      { id: 'C', text: 'Mengejek tradisi dan tata cara warga yang berbeda dengan kita' },
      { id: 'D', text: 'Mengabaikan seluruh peraturan desa adat setempat' },
    ],
    correctAnswer: 'B',
    explanation:
      'Peribahasa "di mana bumi dipijak, di situ langit dijunjung" mengajarkan kita untuk selalu menghormati dan menaati norma atau aturan adat di manapun kita berada.',
  },

  // Soal 25: Perilaku Disiplin Pelajar Pancasila
  {
    id: 25,
    type: 'pg',
    topic: 'Penerapan Aturan',
    difficulty: 'Mudah',
    text: 'Tindakan berikut ini yang merupakan contoh penerapan Profil Pelajar Pancasila dalam menaati aturan di lingkungan sekitar adalah...',
    options: [
      { id: 'A', text: 'Menaati aturan hanya apabila ada guru atau polisi yang mengawasi' },
      { id: 'B', text: 'Membuang sampah ke tempat sampah dengan kesadaran diri sendiri demi kebersihan bersama' },
      { id: 'C', text: 'Menyeberang jalan sembarangan saat jalanan sedang sepi' },
      { id: 'D', text: 'Meninggalkan kran air mengalir di toilet sekolah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Membuang sampah pada tempatnya atas kesadaran diri sendiri tanpa harus diawasi merupakan wujud nyata karakter Pelajar Pancasila yang mandiri, berakhlak mulia, dan berdisiplin tinggi.',
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (PGK) KATEGORI PERNYATAAN (BENAR / SALAH)
  // 5 BUTIR SOAL - SETIAP PERNYATAAN HARUS DIRESPON
  // =========================================================================

  // Soal 26 (PGK Kategori 1): Norma Agama dan Kesusilaan
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Norma Agama & Kesusilaan',
    difficulty: 'Sedang',
    text: 'Perhatikan pernyataan-pernyataan mengenai norma agama dan norma kesusilaan berikut ini. Tentukan apakah setiap pernyataan bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Norma agama bersumber dari wahyu Tuhan Yang Maha Esa dan sanksi pelanggarannya berupa dosa di akhirat.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Seseorang yang berbohong kepada orang tua akan merasa bersalah dan gelisah karena melanggar norma kesusilaan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Norma kesusilaan dibuat secara resmi oleh Dewan Perwakilan Rakyat (DPR) dalam bentuk undang-undang tertulis.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (norma agama bersumber dari Tuhan YME). Pernyataan 2 BENAR (pelanggaran norma kesusilaan menimbulkan penyesalan dan rasa bersalah di hati nurani). Pernyataan 3 SALAH karena aturan yang dibuat DPR dalam bentuk undang-undang tertulis adalah norma hukum, bukan norma kesusilaan.',
  },

  // Soal 27 (PGK Kategori 2): Norma Kesopanan dan Norma Hukum
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Norma Kesopanan & Hukum',
    difficulty: 'Sedang',
    text: 'Tentukan BENAR atau SALAH pada pernyataan mengenai perbedaan norma kesopanan dan norma hukum berikut ini!',
    statements: [
      {
        id: 's1',
        text: 'Norma kesopanan berlaku sama persis dan seragam di seluruh belahan dunia tanpa membedakan suku maupun budaya.',
        correctAnswer: false,
      },
      {
        id: 's2',
        text: 'Norma hukum memiliki sanksi yang nyata, tegas, dan dapat dipaksakan oleh aparat penegak hukum seperti polisi dan pengadilan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Memakai helm standar saat mengendarai sepeda motor di jalan raya adalah kewajiban yang diatur dalam norma hukum.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 SALAH (norma kesopanan bersifat lokal/relatif tergantung adat istiadat setempat). Pernyataan 2 BENAR (sanksi norma hukum tegas dan memaksa). Pernyataan 3 BENAR (kewajiban helm diatur dalam UU Lalu Lintas).',
  },

  // Soal 28 (PGK Kategori 3): Hak dan Kewajiban Anak di Sekolah
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Hak dan Kewajiban di Sekolah',
    difficulty: 'Sedang',
    text: 'Analisis pernyataan mengenai hak dan kewajiban peserta didik di lingkungan sekolah berikut ini. Tentukan BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Meminjam buku pelajaran di perpustakaan sekolah merupakan salah satu hak yang dimiliki oleh setiap siswa.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Mendengarkan penjelasan guru dengan tenang saat kegiatan belajar mengajar berlangsung merupakan kewajiban siswa.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Siswa yang rajin boleh melanggar aturan tata tertib sekolah tanpa dikenai teguran apapun.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (menggunakan fasilitas perpustakaan adalah hak). Pernyataan 2 BENAR (memperhatikan guru adalah kewajiban). Pernyataan 3 SALAH karena tata tertib sekolah berlaku bagi seluruh warga sekolah tanpa terkecuali.',
  },

  // Soal 29 (PGK Kategori 4): Aturan Tertulis dan Tidak Tertulis
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Aturan Tertulis & Tidak Tertulis',
    difficulty: 'Sedang',
    text: 'Tentukan BENAR atau SALAH untuk setiap pernyataan mengenai bentuk aturan tertulis dan tidak tertulis di bawah ini!',
    statements: [
      {
        id: 's1',
        text: 'Rambu lalu lintas, undang-undang, dan peraturan sekolah adalah contoh dari aturan tertulis.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Aturan tidak tertulis biasanya diwariskan secara lisan dan tumbuh dalam kebiasaan hidup bermasyarakat.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Aturan tidak tertulis boleh dilanggar semau kita karena tidak ada buku undang-undangnya.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (rambu dan tata tertib adalah aturan tertulis). Pernyataan 2 BENAR (aturan tidak tertulis berupa adat dan tradisi lisan). Pernyataan 3 SALAH karena aturan tidak tertulis tetap wajib dipatuhi untuk menjaga keharmonisan hidup bersama.',
  },

  // Soal 30 (PGK Kategori 5): Musyawarah dan Pembuatan Aturan di Lingkungan
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Musyawarah & Pembuatan Aturan',
    difficulty: 'Sukar',
    text: 'Tentukan BENAR atau SALAH pada pernyataan mengenai proses pembuatan aturan di lingkungan sekitar berikut ini!',
    statements: [
      {
        id: 's1',
        text: 'Aturan di lingkungan RT/RW dibuat melalui musyawarah warga untuk mewujudkan ketertiban dan ketenteraman bersama.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Dalam musyawarah, setiap peserta boleh memaksakan kehendak pribadinya kepada peserta yang lain.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Hasil keputusan musyawarah yang telah disepakati wajib dipatuhi oleh seluruh warga lingkungan tersebut.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (aturan warga disusun melalui musyawarah mufakat). Pernyataan 2 SALAH (dalam musyawarah dilarang memaksakan kehendak). Pernyataan 3 BENAR (keputusan mufakat mengikat semua warga untuk dilaksanakan dengan tanggung jawab).',
  },

  // =========================================================================
  // BAGIAN 3: ISIAN SINGKAT (5 BUTIR SOAL)
  // Siswa mengetikkan jawaban singkat, dinilai dengan case-insensitive & sinonim wajar
  // =========================================================================

  // Soal 31: Isian - Norma Tertulis
  {
    id: 31,
    type: 'isian',
    topic: 'Bentuk Aturan',
    difficulty: 'Mudah',
    text: 'Aturan yang dibuat secara resmi, dicatat, dan disahkan oleh pihak yang berwenang seperti tata tertib sekolah dan undang-undang dinamakan aturan...',
    correctAnswer: 'tertulis',
    acceptableAnswers: ['tertulis', 'aturan tertulis', 'hukum tertulis'],
    explanation:
      'Aturan tertulis adalah aturan yang dituangkan dalam bentuk tulisan atau dokumen resmi yang disahkan oleh pejabat/lembaga berwenang.',
  },

  // Soal 32: Isian - Sumber Norma Agama
  {
    id: 32,
    type: 'isian',
    topic: 'Norma Agama',
    difficulty: 'Mudah',
    text: 'Norma yang bersumber langsung dari wahyu Tuhan Yang Maha Esa dan terdapat di dalam kitab suci dinamakan norma...',
    correctAnswer: 'agama',
    acceptableAnswers: ['agama', 'norma agama'],
    explanation:
      'Norma agama adalah petunjuk hidup yang berasal dari Tuhan Yang Maha Esa yang disampaikan melalui para nabi dan rasul serta tercantum dalam kitab suci.',
  },

  // Soal 33: Isian - Kewajiban Menyeberang di Tempat yang Tepat
  {
    id: 33,
    type: 'isian',
    topic: 'Aturan Lalu Lintas',
    difficulty: 'Sedang',
    text: 'Garis-garis putih di atas permukaan aspal jalan raya yang disediakan khusus sebagai tempat penyeberangan bagi pejalan kaki disebut...',
    correctAnswer: 'zebra cross',
    acceptableAnswers: ['zebra cross', 'zebracross', 'zebra cros', 'tempat penyeberangan'],
    explanation:
      'Zebra cross adalah marka jalan berupa garis-garis putih membujur yang diperuntukkan bagi pejalan kaki untuk menyeberang jalan raya dengan aman.',
  },

  // Soal 34: Isian - Hubungan Hak dan Kewajiban
  {
    id: 34,
    type: 'isian',
    topic: 'Hak dan Kewajiban',
    difficulty: 'Sedang',
    text: 'Sesuatu yang harus kita laksanakan terlebih dahulu dengan penuh rasa tanggung jawab sebelum kita menuntut hak dinamakan...',
    correctAnswer: 'kewajiban',
    acceptableAnswers: ['kewajiban', 'kewajiban kita'],
    explanation:
      'Kewajiban adalah segala sesuatu yang wajib dilaksanakan dengan penuh tanggung jawab sebelum seseorang menuntut haknya.',
  },

  // Soal 35: Isian - Sanksi Norma Hukum
  {
    id: 35,
    type: 'isian',
    topic: 'Norma Hukum',
    difficulty: 'Sukar',
    text: 'Sanksi bagi pelanggar norma hukum berbeda dengan norma lainnya karena sifat sanksi hukum adalah nyata, mengikat, dan...',
    correctAnswer: 'tegas',
    acceptableAnswers: ['tegas', 'memaksa', 'tegas dan memaksa'],
    explanation:
      'Sifat sanksi norma hukum adalah tegas dan memaksa, yang dijatuhkan oleh lembaga peradilan atau aparat penegak hukum yang berwenang.',
  },
];
