import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (25 BUTIR SOAL)
  // Materi: Aturan, Jenis-Jenis Aturan di Berbagai Tempat (Kelas 4 SD)
  // =========================================================================

  // Soal 1: Pengertian Aturan
  {
    id: 1,
    type: 'pg',
    topic: 'Pengertian Aturan',
    difficulty: 'Mudah',
    text: 'Petunjuk, patokan, atau ketentuan yang dibuat untuk membatasi dan mengarahkan tingkah laku manusia agar tercipta ketertiban dan keamanan dalam kehidupan bersama dinamakan...',
    options: [
      { id: 'A', text: 'Aturan' },
      { id: 'B', text: 'Hak istimewa' },
      { id: 'C', text: 'Pujian' },
      { id: 'D', text: 'Keinginan pribadi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Aturan adalah ketentuan atau pedoman yang mengikat warga suatu kelompok atau tempat, yang berfungsi mengatur perilaku agar tercipta ketertiban, keadilan, dan kenyamanan bersama.',
  },

  // Soal 2: Tujuan Dibuatnya Aturan di Berbagai Tempat
  {
    id: 2,
    type: 'pg',
    topic: 'Tujuan Aturan',
    difficulty: 'Mudah',
    text: 'Di mana pun kita berada, baik di rumah, sekolah, maupun tempat umum, selalu terdapat aturan. Tujuan utama dibuatnya aturan di berbagai tempat tersebut adalah untuk...',
    options: [
      { id: 'A', text: 'Membatasi kebebasan seseorang agar selalu merasa takut' },
      { id: 'B', text: 'Menciptakan ketertiban, keamanan, dan kedamaian hidup bersama' },
      { id: 'C', text: 'Memberikan hukuman yang seberat-beratnya kepada warga' },
      { id: 'D', text: 'Membedakan hak warga yang kaya dan warga yang miskin' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tujuan utama dibuatnya aturan di berbagai tempat adalah menciptakan ketertiban, keamanan, kenyamanan, serta keharmonisan di antara seluruh orang yang berada di tempat tersebut.',
  },

  // Soal 3: Jenis Aturan Tertulis
  {
    id: 3,
    type: 'pg',
    topic: 'Aturan Tertulis',
    difficulty: 'Mudah',
    text: 'Aturan yang dituangkan dalam bentuk tulisan atau dokumen resmi, dipajang, atau dibukukan agar dibaca dan dipatuhi oleh semua orang disebut aturan...',
    options: [
      { id: 'A', text: 'Tertulis' },
      { id: 'B', text: 'Tidak tertulis' },
      { id: 'C', text: 'Bebas' },
      { id: 'D', text: 'Adat lisan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Aturan tertulis adalah aturan yang dibuat secara resmi dalam bentuk tulisan atau dokumen yang disahkan oleh pihak berwenang, seperti tata tertib sekolah dan undang-undang.',
  },

  // Soal 4: Contoh Aturan Tertulis di Tempat Umum
  {
    id: 4,
    type: 'pg',
    topic: 'Aturan Tertulis',
    difficulty: 'Sedang',
    text: 'Contoh aturan tertulis yang sering kita jumpai terpampang di tempat-tempat umum seperti rumah sakit dan pom bensin adalah...',
    options: [
      { id: 'A', text: 'Papan larangan "Dilarang Merokok" dan "Harap Menjaga Ketenangan"' },
      { id: 'B', text: 'Membungkukkan badan saat berjalan di depan orang yang lebih tua' },
      { id: 'C', text: 'Mengucapkan kata tolong saat meminta bantuan' },
      { id: 'D', text: 'Menyapa tetangga saat berpapasan di gang' },
    ],
    correctAnswer: 'A',
    explanation:
      'Papan larangan "Dilarang Merokok" atau "Harap Tenang" merupakan aturan tertulis yang dipasang secara resmi di tempat umum demi keselamatan dan ketertiban pengunjung.',
  },

  // Soal 5: Jenis Aturan Tidak Tertulis
  {
    id: 5,
    type: 'pg',
    topic: 'Aturan Tidak Tertulis',
    difficulty: 'Mudah',
    text: 'Aturan yang tidak dicatat dalam buku resmi melainkan tumbuh, disepakati, dan diwariskan secara lisan dalam kebiasaan hidup bermasyarakat dinamakan aturan...',
    options: [
      { id: 'A', text: 'Tertulis' },
      { id: 'B', text: 'Tidak tertulis' },
      { id: 'C', text: 'Undang-undang pidana' },
      { id: 'D', text: 'Peraturan pemerintah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Aturan tidak tertulis adalah norma atau kebiasaan sopan santun yang disepakati bersama oleh warga masyarakat tanpa dibukukan secara formal.',
  },

  // Soal 6: Contoh Aturan Tidak Tertulis dalam Pergaulan
  {
    id: 6,
    type: 'pg',
    topic: 'Aturan Tidak Tertulis',
    difficulty: 'Sedang',
    text: 'Berikut ini merupakan contoh nyata dari pelaksanaan aturan tidak tertulis yang mencerminkan kesopanan di lingkungan sekitar kita adalah...',
    options: [
      { id: 'A', text: 'Mengetuk pintu dan mengucap salam sebelum memasuki rumah orang lain' },
      { id: 'B', text: 'Menyalakan lampu sein saat hendak berbelok di jalan raya' },
      { id: 'C', text: 'Membayar karcis retribusi sebelum masuk ke tempat wisata' },
      { id: 'D', text: 'Mengisi buku daftar hadir siswa setiap pagi di kelas' },
    ],
    correctAnswer: 'A',
    explanation:
      'Mengetuk pintu dan mengucap salam merupakan tata krama pergaulan (aturan tidak tertulis) yang diajarkan turun-temurun untuk menghormati tuan rumah.',
  },

  // Soal 7: Aturan di Lingkungan Rumah - Bangun Pagi
  {
    id: 7,
    type: 'pg',
    topic: 'Aturan di Rumah',
    difficulty: 'Mudah',
    text: 'Made membiasakan diri bangun pagi pukul 05.30, segera merapikan tempat tidurnya, dan mandi tanpa harus disuruh oleh ibunya. Tindakan Made mencerminkan...',
    options: [
      { id: 'A', text: 'Rasa terpaksa karena takut dimarahi guru' },
      { id: 'B', text: 'Ketaatan dan disiplin terhadap aturan di rumah' },
      { id: 'C', text: 'Keinginan untuk menyombongkan diri kepada temannya' },
      { id: 'D', text: 'Kepatuhan terhadap tata tertib di perpustakaan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bangun tepat waktu dan merapikan kamar sendiri merupakan bentuk ketaatan terhadap aturan di rumah yang menumbuhkan sikap mandiri dan disiplin.',
  },

  // Soal 8: Aturan di Lingkungan Rumah - Izin Bepergian
  {
    id: 8,
    type: 'pg',
    topic: 'Aturan di Rumah',
    difficulty: 'Mudah',
    text: 'Ketika diajak teman bermain ke lapangan sepak bola pada sore hari, aturan penting di rumah yang wajib dilakukan terlebih dahulu adalah...',
    options: [
      { id: 'A', text: 'Langsung pergi tanpa memberitahu siapa pun di rumah' },
      { id: 'B', text: 'Meminta izin dan berpamitan kepada orang tua' },
      { id: 'C', text: 'Mengunci pintu rumah dari luar dan membawa kuncinya' },
      { id: 'D', text: 'Menunggu orang tua tertidur baru keluar rumah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Meminta izin dan berpamitan kepada orang tua sebelum bepergian adalah aturan penting di rumah agar orang tua tidak khawatir dan mengetahui keberadaan kita.',
  },

  // Soal 9: Aturan di Lingkungan Sekolah - Upacara Bendera
  {
    id: 9,
    type: 'pg',
    topic: 'Aturan di Sekolah',
    difficulty: 'Mudah',
    text: 'Aturan di SD Negeri 3 Loloan Timur mewajibkan setiap siswa hadir sebelum pukul 07.00 dan berbaris rapi mengikuti upacara bendera setiap hari Senin. Manfaat menaati aturan tersebut adalah...',
    options: [
      { id: 'A', text: 'Melatih jiwa disiplin, cinta tanah air, dan rasa persatuan' },
      { id: 'B', text: 'Menghabiskan waktu belajar agar tidak ada ulangan' },
      { id: 'C', text: 'Mencari siswa yang seragamnya paling mahal' },
      { id: 'D', text: 'Menghindari tugas kebersihan kelas' },
    ],
    correctAnswer: 'A',
    explanation:
      'Mengikuti upacara bendera dengan tertib dan tepat waktu melatih kedisiplinan, memupuk rasa nasionalisme, serta menghargai jasa para pahlawan bangsa.',
  },

  // Soal 10: Aturan di Lingkungan Sekolah - Suasana Belajar
  {
    id: 10,
    type: 'pg',
    topic: 'Aturan di Sekolah',
    difficulty: 'Sedang',
    text: 'Saat bapak atau ibu guru sedang menerangkan pelajaran di depan kelas, aturan kelas yang harus ditaati oleh seluruh siswa adalah...',
    options: [
      { id: 'A', text: 'Berbicara dengan teman sebangku dengan suara lantang' },
      { id: 'B', text: 'Mendengarkan dengan sungguh-sungguh dan mengangkat tangan jika ingin bertanya' },
      { id: 'C', text: 'Berjalan-jalan mengelilingi ruang kelas' },
      { id: 'D', text: 'Mengerjakan permainan gim di bawah laci meja' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mendengarkan penjelasan guru dan meminta izin atau mengangkat tangan jika hendak bertanya merupakan aturan penting di kelas agar proses belajar berjalan lancar dan tertib.',
  },

  // Soal 11: Aturan di Perpustakaan Sekolah
  {
    id: 11,
    type: 'pg',
    topic: 'Aturan di Perpustakaan',
    difficulty: 'Mudah',
    text: 'Perpustakaan adalah tempat yang disediakan untuk membaca dan meminjam buku. Aturan khusus yang wajib dipatuhi saat berada di dalam perpustakaan adalah...',
    options: [
      { id: 'A', text: 'Membawa makanan berat dan makan bersama di meja baca' },
      { id: 'B', text: 'Menjaga ketenangan, tidak bersuara gaduh, dan mengembalikan buku ke tempatnya' },
      { id: 'C', text: 'Menyobek halaman buku yang berisi gambar menarik' },
      { id: 'D', text: 'Berlari-lari mengejar teman di antara rak buku' },
    ],
    correctAnswer: 'B',
    explanation:
      'Aturan di perpustakaan mewajibkan pengunjung menjaga ketenangan agar tidak mengganggu pembaca lain, dilarang makan/minum, dan merawat buku dengan baik.',
  },

  // Soal 12: Aturan di Tempat Ibadah - Suasana Tenang
  {
    id: 12,
    type: 'pg',
    topic: 'Aturan di Tempat Ibadah',
    difficulty: 'Mudah',
    text: 'Ketika memasuki tempat ibadah seperti masjid, pura, gereja, atau wihara, aturan yang harus kita junjung tinggi adalah...',
    options: [
      { id: 'A', text: 'Berpakaian sopan, bersih, menjaga kesucian, dan tidak membuat keributan' },
      { id: 'B', text: 'Bercanda dan berteriak-teriak di ruang ibadah' },
      { id: 'C', text: 'Menyalakan nada dering telepon genggam dengan suara keras' },
      { id: 'D', text: 'Menggunakan alas kaki berlumpur ke dalam area suci' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tempat ibadah adalah tempat suci untuk beribadah kepada Tuhan YME. Aturannya mencakup berpakaian sopan dan bersih, menjaga keheningan, serta melepas alas kaki jika disyaratkan.',
  },

  // Soal 13: Aturan di Tempat Ibadah - Menghargai Keragaman
  {
    id: 13,
    type: 'pg',
    topic: 'Aturan di Tempat Ibadah',
    difficulty: 'Sedang',
    text: 'Saat warga sekitar sedang melaksanakan ibadah di tempat ibadahnya, sikap yang mencerminkan ketaatan terhadap aturan bertoleransi di masyarakat adalah...',
    options: [
      { id: 'A', text: 'Membunyikan petasan atau klakson motor dengan keras di depannya' },
      { id: 'B', text: 'Menjaga ketenangan dan tidak mengganggu jalannya peribadatan' },
      { id: 'C', text: 'Melarang orang lain melaksanakan ibadah agamanya' },
      { id: 'D', text: 'Menertawakan tata cara ibadah yang berbeda dengan kita' },
    ],
    correctAnswer: 'B',
    explanation:
      'Aturan hidup bermasyarakat di Indonesia menjamin kebebasan beribadah. Menjaga ketenangan saat umat lain beribadah merupakan wujud toleransi dan penghormatan antarumat beragama.',
  },

  // Soal 14: Aturan di Jalan Raya - Menggunakan Trotoar & Zebra Cross
  {
    id: 14,
    type: 'pg',
    topic: 'Aturan di Jalan Raya',
    difficulty: 'Mudah',
    text: 'Sebagai pejalan kaki, aturan keselamatan di jalan raya yang benar saat hendak menyeberang jalan adalah...',
    options: [
      { id: 'A', text: 'Menyeberang sambil berlari tiba-tiba di tikungan tajam' },
      { id: 'B', text: 'Menyeberang melalui zebra cross atau jembatan penyeberangan orang (JPO)' },
      { id: 'C', text: 'Menyeberang sambil menatap layar telepon genggam tanpa melihat jalan' },
      { id: 'D', text: 'Melompati pagar pembatas jalan di jalan tol' },
    ],
    correctAnswer: 'B',
    explanation:
      'Zebra cross dan JPO disediakan sebagai fasilitas resmi penyeberangan pejalan kaki agar terhindar dari bahaya kecelakaan lalu lintas.',
  },

  // Soal 15: Aturan di Jalan Raya - Pengendara Sepeda Motor
  {
    id: 15,
    type: 'pg',
    topic: 'Aturan di Jalan Raya',
    difficulty: 'Mudah',
    text: 'Setiap pengendara dan penumpang sepeda motor diwajibkan memakai helm berstandar SNI dan mengunci talinya. Tujuan aturan keselamatan jalan raya ini adalah...',
    options: [
      { id: 'A', text: 'Melindungi kepala dari benturan berbahaya jika terjadi kecelakaan' },
      { id: 'B', text: 'Supaya tidak dikenali oleh orang lain di jalan' },
      { id: 'C', text: 'Sebagai hiasan agar terlihat keren' },
      { id: 'D', text: 'Menghindari rasa dingin pada wajah saat malam hari' },
    ],
    correctAnswer: 'A',
    explanation:
      'Memakai helm berstandar SNI adalah aturan hukum keselamatan berkendara yang berfungsi melindungi organ kepala dari cedera fatal saat terjadi benturan.',
  },

  // Soal 16: Aturan di Kendaraan Umum - Memberikan Kursi Prioritas
  {
    id: 16,
    type: 'pg',
    topic: 'Aturan di Kendaraan Umum',
    difficulty: 'Sedang',
    text: 'Saat menaiki bus umum atau kereta api, Edo melihat seorang nenek lansia yang berdiri karena tidak mendapat tempat duduk. Aturan kesopanan dan kepedulian yang sebaiknya dilakukan Edo adalah...',
    options: [
      { id: 'A', text: 'Pura-pura tidur agar tidak perlu berdiri' },
      { id: 'B', text: 'Mempersilakan nenek tersebut menempati tempat duduknya' },
      { id: 'C', text: 'Menyuruh nenek tersebut turun dari bus' },
      { id: 'D', text: 'Meminta uang jika nenek tersebut ingin duduk' },
    ],
    correctAnswer: 'B',
    explanation:
      'Di transportasi umum terdapat aturan tertulis maupun norma kesopanan mengenai "kursi prioritas" yang diutamakan untuk lansia, ibu hamil, penyandang disabilitas, dan ibu membawa balita.',
  },

  // Soal 17: Aturan di Tempat Wisata / Taman Rekreasi
  {
    id: 17,
    type: 'pg',
    topic: 'Aturan di Tempat Wisata',
    difficulty: 'Mudah',
    text: 'Saat berkunjung ke Kebun Raya atau taman rekreasi alam, terdapat papan aturan: "DILARANG MEMETIK BUNGA DAN MENGINJAK RUMPUT HIAS". Sikap pengunjung yang baik adalah...',
    options: [
      { id: 'A', text: 'Memetik bunga secara sembunyi-sembunyi untuk oleh-oleh' },
      { id: 'B', text: 'Mematuhi larangan dengan berjalan di jalur pejalan kaki dan menikmati keindahan tanpa merusak' },
      { id: 'C', text: 'Menginjak rumput beramai-ramai untuk berfoto' },
      { id: 'D', text: 'Mencabut tanaman hias dan membawanya pulang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mematuhi aturan di tempat wisata bertujuan menjaga kelestarian, keindahan tanaman, dan fasilitas taman agar tetap asri dan dapat dinikmati bersama.',
  },

  // Soal 18: Aturan Membuang Sampah di Tempat Umum
  {
    id: 18,
    type: 'pg',
    topic: 'Aturan di Tempat Umum',
    difficulty: 'Mudah',
    text: 'Beni membeli es krim saat berjalan-jalan di alun-alun kota. Setelah es krim habis, namun di dekatnya belum ada tempat sampah, tindakan tertib yang tepat adalah...',
    options: [
      { id: 'A', text: 'Menyelipkan bungkus plastik ke bawah pot bunga kota' },
      { id: 'B', text: 'Melempar bungkus ke selokan air' },
      { id: 'C', text: 'Menyimpan bungkus es krim di dalam saku atau tas hingga menemukan tempat sampah' },
      { id: 'D', text: 'Membuang bungkus di jalan karena ada petugas kebersihan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Aturan menjaga kebersihan di tempat umum mengharuskan kita membuang sampah pada tempatnya. Jika belum menemukan tempat sampah, sampah disimpan terlebih dahulu.',
  },

  // Soal 19: Aturan Mengantre di Fasilitas Umum
  {
    id: 19,
    type: 'pg',
    topic: 'Aturan di Tempat Umum',
    difficulty: 'Mudah',
    text: 'Di loket tiket bioskop, loket stasiun, maupun kasir kantin, orang-orang berbaris urut ke belakang. Budaya mengantre ini merupakan aturan yang mengajarkan kita nilai...',
    options: [
      { id: 'A', text: 'Keserakahan dan egois' },
      { id: 'B', text: 'Kesabaran, keadilan, dan saling menghargai hak orang lain' },
      { id: 'C', text: 'Kelicikan dalam menyerobot barisan' },
      { id: 'D', text: 'Kekuatan fisik siapa yang paling cepat menyikut' },
    ],
    correctAnswer: 'B',
    explanation:
      'Aturan mengantre melatih kesabaran, kedisiplinan, keadilan, serta menghargai orang lain yang telah datang lebih dahulu.',
  },

  // Soal 20: Aturan di Lingkungan Masyarakat - Tamu Wajib Lapor
  {
    id: 20,
    type: 'pg',
    topic: 'Aturan di Lingkungan Masyarakat',
    difficulty: 'Sedang',
    text: 'Di pos ronda masuk desa terdapat plang aturan tertulis: "TAMU MENGINAP 1X24 JAM WAJIB LAPOR KETUA RT". Tujuan aturan lingkungan warga ini adalah...',
    options: [
      { id: 'A', text: 'Menarik iuran uang sebanyak-banyaknya dari tamu' },
      { id: 'B', text: 'Menjaga keamanan lingkungan sekitar dan mendata orang baru demi ketenteraman warga' },
      { id: 'C', text: 'Melarang warga memiliki kerabat dari luar kota' },
      { id: 'D', text: 'Menyusahkan para pengunjung yang datang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Aturan tamu lapor 1x24 jam dibuat demi menjaga keamanan lingkungan sekitar, mencegah kejahatan, dan mempermudah bantuan darurat apabila terjadi hal yang tidak diinginkan.',
  },

  // Soal 21: Aturan di Lingkungan Masyarakat - Jam Tenang
  {
    id: 21,
    type: 'pg',
    topic: 'Aturan di Lingkungan Masyarakat',
    difficulty: 'Sedang',
    text: 'Di lingkungan tempat tinggal Siti terdapat kesepakatan bahwa setelah pukul 21.00 malam diberlakukan jam tenang. Sikap warga yang mematuhi aturan tersebut adalah...',
    options: [
      { id: 'A', text: 'Membunyikan knalpot brong motor dengan suara memekakkan telinga' },
      { id: 'B', text: 'Mengecilkan volume televisi/musik dan tidak membuat kegaduhan agar warga dapat beristirahat' },
      { id: 'C', text: 'Berteriak-teriak memanggil teman di depan rumah tetangga' },
      { id: 'D', text: 'Menyalakan mesin pertukangan kayu di teras' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jam tenang di lingkungan masyarakat bertujuan memberikan hak istirahat yang nyaman bagi seluruh warga tetangga tanpa terganggu oleh suara bising.',
  },

  // Soal 22: Aturan di Rumah Sakit / Puskesmas
  {
    id: 22,
    type: 'pg',
    topic: 'Aturan di Rumah Sakit',
    difficulty: 'Sedang',
    text: 'Saat menjenguk teman atau kerabat yang sedang dirawat di rumah sakit, aturan yang harus kita patuhi adalah...',
    options: [
      { id: 'A', text: 'Menjenguk pada jam besuk yang ditentukan dan tidak berbicara dengan suara keras' },
      { id: 'B', text: 'Membawa rombongan teman satu kelas masuk ke ruang perawatan sekaligus' },
      { id: 'C', text: 'Bermain kejar-kejaran di lorong kamar pasien' },
      { id: 'D', text: 'Mencoba-coba menekan tombol alat medis pasien' },
    ],
    correctAnswer: 'A',
    explanation:
      'Aturan di rumah sakit mewajibkan pembatasan pengunjung sesuai jam besuk, menjaga ketenangan, dan mencuci tangan demi pemulihan pasien dan mencegah penularan penyakit.',
  },

  // Soal 23: Akibat Melanggar Aturan di Tempat Wisata
  {
    id: 23,
    type: 'pg',
    topic: 'Akibat Melanggar Aturan',
    difficulty: 'Sedang',
    text: 'Seorang pengunjung mencorat-coret dinding candi bersejarah menggunakan cat semprot (vandalisme). Akibat buruk dari pelanggaran aturan tersebut adalah...',
    options: [
      { id: 'A', text: 'Candi bersejarah menjadi semakin indah dan terkenal' },
      { id: 'B', text: 'Merusak situs cagar budaya warisan leluhur dan pelakunya dapat dikenai sanksi pidana' },
      { id: 'C', text: 'Pengunjung lain akan berterima kasih atas karya lukisannya' },
      { id: 'D', text: 'Meningkatkan jumlah wisatawan mancanegara' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mencoret-coret fasilitas umum dan situs cagar budaya adalah perbuatan vandalisme yang merusak keaslian sejarah serta melanggar hukum perlindungan cagar budaya.',
  },

  // Soal 24: Sanksi Pelanggaran Aturan di Berbagai Tempat
  {
    id: 24,
    type: 'pg',
    topic: 'Sanksi Aturan',
    difficulty: 'Sukar',
    text: 'Setiap aturan selalu disertai dengan sanksi bagi pelanggarnya. Perbedaan sanksi antara pelanggaran aturan hukum di jalan raya dengan aturan kesopanan di meja makan keluarga adalah...',
    options: [
      { id: 'A', text: 'Pelanggaran lalu lintas disanksi tilang/denda resmi, sedangkan di meja makan berupa teguran atau nasihat orang tua' },
      { id: 'B', text: 'Pelanggaran di meja makan dijatuhi hukuman kurungan penjara' },
      { id: 'C', text: 'Pelanggaran lalu lintas tidak pernah dikenai sanksi apapun' },
      { id: 'D', text: 'Kedua pelanggaran tersebut sama-sama diadili oleh hakim di pengadilan negeri' },
    ],
    correctAnswer: 'A',
    explanation:
      'Aturan hukum (seperti lalu lintas) memiliki sanksi resmi yang tegas dan memaksa dari aparat berwenang (tilang/denda), sedangkan aturan kesopanan di rumah disanksi secara kekeluargaan melalui nasihat atau teguran.',
  },

  // Soal 25: Perilaku Sadar Aturan di Mana Pun Berada
  {
    id: 25,
    type: 'pg',
    topic: 'Perilaku Sadar Aturan',
    difficulty: 'Sedang',
    text: 'Peribahasa Indonesia "Di mana bumi dipijak, di situ langit dijunjung" mengandung pesan moral yang sangat luhur dalam mematuhi aturan, yaitu...',
    options: [
      { id: 'A', text: 'Kita hanya perlu mematuhi aturan saat berada di rumah kita sendiri' },
      { id: 'B', text: 'Di mana pun kita berada, kita harus selalu menghormati dan mematuhi aturan yang berlaku di tempat tersebut' },
      { id: 'C', text: 'Kita harus memaksakan aturan daerah asal kita kepada warga daerah lain' },
      { id: 'D', text: 'Aturan boleh dilanggar jika tidak ada kamera pengawas' },
    ],
    correctAnswer: 'B',
    explanation:
      'Peribahasa tersebut bermakna bahwa di manapun kita tinggal atau berada, kita wajib menghormati, menyesuaikan diri, dan mematuhi aturan serta adat istiadat setempat.',
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (PGK) KATEGORI PERNYATAAN (BENAR / SALAH)
  // 5 BUTIR SOAL - SETIAP PERNYATAAN WAJIB DIRESPON BENAR ATAU SALAH
  // =========================================================================

  // Soal 26 (PGK Kategori 1): Aturan di Rumah dan Aturan di Sekolah
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Aturan di Rumah & Sekolah',
    difficulty: 'Sedang',
    text: 'Perhatikan pernyataan-pernyataan mengenai aturan di rumah dan di sekolah berikut ini. Tentukan apakah setiap butir bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Membantu mencuci piring sendiri setelah makan merupakan salah satu contoh ketaatan terhadap aturan di rumah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Memakai sepatu berwarna bebas sesuka hati pada saat upacara bendera hari Senin diperbolehkan dalam tata tertib sekolah.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Melaksanakan jadwal piket kebersihan kelas bersama teman regu merupakan wujud tanggung jawab terhadap aturan sekolah.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (mencuci piring adalah aturan mandiri di rumah). Pernyataan 2 SALAH (upacara bendera mewajibkan sepatu hitam bertali sesuai tata tertib seragam). Pernyataan 3 BENAR (piket kelas adalah aturan sekolah).',
  },

  // Soal 27 (PGK Kategori 2): Aturan di Tempat Ibadah dan Tempat Wisata
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Aturan Tempat Ibadah & Wisata',
    difficulty: 'Sedang',
    text: 'Tentukan BENAR atau SALAH pada pernyataan mengenai aturan di tempat ibadah dan tempat wisata di bawah ini!',
    statements: [
      {
        id: 's1',
        text: 'Saat berada di tempat ibadah, kita harus menonaktifkan nada dering telepon genggam agar tidak mengganggu kekhusyukan jamaah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pengunjung tempat wisata diperbolehkan membuang botol plastik ke sungai atau danau asalkan tidak terlihat petugas.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Mengantre dengan tertib saat membeli tiket masuk wahana rekreasi mencerminkan sikap menghargai hak pengunjung lain.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (menjaga ketenangan di tempat ibadah). Pernyataan 2 SALAH (membuang sampah ke sungai/danau dilarang keras karena mencemari lingkungan wisata). Pernyataan 3 BENAR (antre adalah aturan etika fasilitas wisata).',
  },

  // Soal 28 (PGK Kategori 3): Aturan Tertulis dan Tidak Tertulis di Berbagai Tempat
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Jenis Aturan Tertulis & Tidak Tertulis',
    difficulty: 'Sedang',
    text: 'Analisis pernyataan mengenai perbedaan jenis aturan tertulis dan tidak tertulis di berbagai tempat. Tentukan BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Rambu lampu lalu lintas di jalan raya merupakan bentuk aturan tertulis yang memiliki lambang dan makna resmi.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Aturan tidak tertulis boleh diabaikan begitu saja karena pelanggarnya tidak akan pernah ditegur oleh masyarakat sekitar.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Mengucapkan kata "permisi" saat berjalan melintas di depan orang tua yang sedang duduk merupakan contoh aturan tidak tertulis.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (rambu lalu lintas adalah aturan tertulis resmi). Pernyataan 2 SALAH (pelanggaran aturan tidak tertulis mendapat sanksi sosial berupa teguran dan celaan). Pernyataan 3 BENAR (mengucap permisi adalah norma kesopanan tidak tertulis).',
  },

  // Soal 29 (PGK Kategori 4): Aturan di Perpustakaan dan Rumah Sakit
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Aturan di Perpustakaan & Rumah Sakit',
    difficulty: 'Sedang',
    text: 'Tentukan BENAR atau SALAH untuk setiap pernyataan mengenai aturan di perpustakaan dan rumah sakit berikut ini!',
    statements: [
      {
        id: 's1',
        text: 'Di dalam ruang perpustakaan, pengunjung dilarang makan, minum, dan bercakap-cakap dengan suara keras.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Di rumah sakit, setiap orang bebas berkunjung pada jam berapa pun tanpa perlu mematuhi jadwal jam besuk pasien.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Menjaga keheningan di sekitar ruang rawat inap rumah sakit sangat penting agar pasien dapat beristirahat dan lekas sembuh.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (aturan perpustakaan melarang makan/minum dan kegaduhan). Pernyataan 2 SALAH (rumah sakit memiliki jam besuk ketat demi ketenangan pasien). Pernyataan 3 BENAR (ketenangan membantu pemulihan kondisi pasien).',
  },

  // Soal 30 (PGK Kategori 5): Aturan di Lingkungan Masyarakat dan Jalan Raya
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Aturan Masyarakat & Jalan Raya',
    difficulty: 'Sukar',
    text: 'Tentukan BENAR atau SALAH pada pernyataan mengenai penerapan aturan di lingkungan masyarakat dan jalan raya berikut!',
    statements: [
      {
        id: 's1',
        text: 'Warga yang memelihara hewan peliharaan berkewajiban menjaga agar hewannya tidak mengotori atau membahayakan tetangga sekitar.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Anak-anak kelas 4 SD yang belum cukup umur sudah diperbolehkan mengendarai sepeda motor sendiri di jalan raya umum.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Berpartisipasi dalam kegiatan kerja bakti membersihkan lingkungan tempat tinggal merupakan wujud ketaatan terhadap aturan warga.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (pemilik hewan wajib bertanggung jawab menjaga ketertiban lingkungan). Pernyataan 2 SALAH (anak di bawah umur dilarang mengendarai motor menurut UU Lalu Lintas). Pernyataan 3 BENAR (kerja bakti adalah kewajiban hidup bermasyarakat).',
  },

  // =========================================================================
  // BAGIAN 3: ISIAN SINGKAT (5 BUTIR SOAL)
  // Mengetikkan jawaban singkat, dinilai dengan case-insensitive & variasi kata kunci
  // =========================================================================

  // Soal 31: Isian - Jenis Aturan Berdasarkan Bentuk
  {
    id: 31,
    type: 'isian',
    topic: 'Jenis-Jenis Aturan',
    difficulty: 'Mudah',
    text: 'Berdasarkan bentuknya, tata tertib sekolah dan rambu-rambu lalu lintas termasuk ke dalam jenis aturan...',
    correctAnswer: 'tertulis',
    acceptableAnswers: ['tertulis', 'aturan tertulis', 'hukum tertulis'],
    explanation:
      'Tata tertib sekolah dan rambu lalu lintas dibuat dalam wujud teks atau gambar resmi yang dicatat, sehingga termasuk jenis aturan tertulis.',
  },

  // Soal 32: Isian - Aturan Penyeberangan di Jalan Raya
  {
    id: 32,
    type: 'isian',
    topic: 'Aturan di Jalan Raya',
    difficulty: 'Mudah',
    text: 'Garis-garis putih melintang di atas jalan raya yang disediakan bagi pejalan kaki untuk menyeberang dengan aman disebut...',
    correctAnswer: 'zebra cross',
    acceptableAnswers: ['zebra cross', 'zebracross', 'zebra cros', 'penyeberangan jalan'],
    explanation:
      'Zebra cross adalah marka jalan berupa garis-garis putih yang merupakan aturan tempat penyeberangan aman bagi pejalan kaki.',
  },

  // Soal 33: Isian - Aturan di Fasilitas Umum (Mengantre)
  {
    id: 33,
    type: 'isian',
    topic: 'Aturan di Tempat Umum',
    difficulty: 'Sedang',
    text: 'Sikap berbaris teratur ke belakang menunggu giliran saat membeli tiket atau membayar belanjaan di kasir disebut budaya...',
    correctAnswer: 'antre',
    acceptableAnswers: ['antre', 'antri', 'mengantre', 'mengantri', 'budaya antre', 'budaya antri'],
    explanation:
      'Budaya antre merupakan aturan penting di fasilitas umum yang mengajarkan kesabaran, keadilan, dan menghormati hak sesama.',
  },

  // Soal 34: Isian - Aturan di Tempat Wisata (Vandalisme)
  {
    id: 34,
    type: 'isian',
    topic: 'Aturan di Tempat Wisata',
    difficulty: 'Sedang',
    text: 'Perbuatan merusak atau mencoret-coret fasilitas umum, dinding taman, dan situs bersejarah secara sembarangan disebut perbuatan...',
    correctAnswer: 'vandalisme',
    acceptableAnswers: ['vandalisme', 'vandal', 'merusak fasilitas', 'perusakan'],
    explanation:
      'Vandalisme adalah tindakan merusak atau mencoret-coret sarana umum dan karya seni bersejarah tanpa izin, yang dilarang keras di berbagai tempat.',
  },

  // Soal 35: Isian - Manfaat Mematuhi Aturan
  {
    id: 35,
    type: 'isian',
    topic: 'Manfaat Aturan',
    difficulty: 'Sukar',
    text: 'Jika seluruh warga di rumah, sekolah, dan masyarakat selalu menaati aturan yang berlaku, maka kehidupan bersama akan menjadi aman, damai, dan...',
    correctAnswer: 'tertib',
    acceptableAnswers: ['tertib', 'tenteram', 'tentram', 'nyaman', 'harmonis', 'rukun'],
    explanation:
      'Ketaatan seluruh warga terhadap aturan di berbagai tempat menciptakan suasana kehidupan yang tertib, teratur, aman, dan tenteram.',
  },
];
