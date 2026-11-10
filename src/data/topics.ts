import {SITE, MAPS, OPERATOR, ADDRESS, CHECKED} from './guide';

export interface FaqItem { q: string; a: string; }
export interface RouteStep { title: string; body: string; }
export interface Highlight { title: string; body: string; }
export interface Photo { src: string; alt: string; credit?: string; }

// Mỗi trang chủ đề là một thực thể có ý định tìm kiếm riêng.
// Các mô-đun không bắt buộc: để undefined thì TopicPage không render.
// Không tự bịa giờ, giá hay lịch trình; mọi thông tin động đều gắn nguồn và ngày đối chiếu.
export interface Topic {
  slug: string;
  title: string;
  h1: string;
  description: string;
  eyebrow?: string;
  intro: string;
  explore?: string;
  tips?: string;
  highlights?: Highlight[];
  about?: string;
  basic?: string;
  hours?: string;
  tickets?: string;
  directions?: string;
  discovery?: string;
  route?: RouteStep[];
  notes?: string;
  photos?: Photo[];
  stay?: string;
  faq?: FaqItem[];
  related: string[];
}

// Liên kết đến các trang cốt lõi hiện có (GuidePage). Trang chủ đề khác tự động ghép từ topics.
export const navLinks: {[k: string]: {href: string; label: string}} = {
  home: {href: '/', label: 'Khu du lịch Đại Nam'},
  directions: {href: '/duong-di/', label: 'Đường đi'},
  hours: {href: '/gio-mo-cua/', label: 'Giờ mở cửa'},
  tickets: {href: '/ve-va-gia/', label: 'Vé và chi phí'},
};

export const topics: Topic[] = [
  // 1. Vườn thú Đại Nam
  {
    slug: 'vuon-thu-dai-nam',
    title: 'Vườn thú Đại Nam – Giờ mở cửa, vé & kinh nghiệm',
    h1: 'Vườn thú Đại Nam – Cẩm nang tham quan',
    description: 'Vườn thú Đại Nam có những gì, có phù hợp cho trẻ em không và cách xác nhận giờ, vé theo từng ngày. Xem trước khi đi.',
    eyebrow: 'Phân khu – Động vật',
    intro: 'Vườn thú là một trong những phân khu được đơn vị vận hành giới thiệu tại Khu du lịch Đại Nam, cùng với đền thờ, biển nhân tạo và trường đua.',
    explore: 'Với gia đình có trẻ nhỏ, vườn thú thường là điểm dừng dễ tiếp cận nhất: đi bộ ngắm thú, học về động vật và chụp ảnh ngoài trời. Trang chủ đơn vị vận hành có mục giới thiệu vườn bách thú, nhưng trang này không xác nhận danh sách cá thể hay khu trưng bày còn hoạt động hôm nay.',
    tips: 'Phù hợp với gia đình, nhóm học sinh và người thích chụp ảnh thiên nhiên. Dừng lại khoảng 1–2 giờ nếu kết hợp với các phân khu khác; mang mũ, nước uống và giày đi bộ.',
    highlights: [
      {title: 'Khu trưng bày động vật', body: 'Xem các khu nuôi thú theo tuyến đi bộ. Xác nhận trước khu nào đang mở vào ngày đi.'},
      {title: 'Trải nghiệm cho trẻ em', body: 'Trẻ em thường thích quan sát động vật ở cự ly an toàn; chọn tuyến ít bước đi nếu đi cùng em bé.'},
      {title: 'Góc chụp ảnh', body: 'Ánh sáng sáng sớm hoặc cuối chiều thường thuận tiện; giữ khoảng cách an toàn và không vượt rào.'},
    ],
    about: 'Đơn vị vận hành liệt kê vườn bách thú trong các phân khu của khu du lịch. Thông tin này mô tả loại hình, không phải xác nhận mọi chuồng trại mở cửa trong ngày bạn đến.',
    basic: 'Địa điểm: trong tổng thể Khu du lịch Đại Nam, '+ADDRESS+'. Vườn thú là phân khu giải trí sinh thái bên cạnh các hạng mục văn hóa và thể thao.',
    hours: 'Chưa xác minh được lịch mở cửa riêng của vườn thú có ngày áp dụng. Xem Giờ mở cửa và hỏi đơn vị vận hành theo đúng phân khu trước chuyến đi (đối chiếu '+CHECKED+').',
    tickets: 'Vé cổng, vé vườn thú và các dịch vụ khác có thể có điều kiện riêng. Xem Vé và chi phí và xác nhận với đơn vị bán trước khi thanh toán.',
    directions: 'Từ TP.HCM, đi theo QL13/Đại lộ Bình Dương đến địa chỉ tham chiếu. Xem Đường đi để đối chiếu địa chỉ và xác nhận cổng nhận khách.',
    discovery: 'Vườn thú kết hợp yếu tố giáo dục và giải trí: quan sát động vật, tìm hiểu môi trường sống và hình thành thói quen tôn trọng động vật hoang dã.',
    route: [
      {title: 'Vào cổng và xác nhận tuyến', body: 'Hỏi lễ tân tuyến vườn thú đang mở và bản đồ tham quan trước khi đi sâu.'},
      {title: 'Đi bộ theo khu trưng bày', body: 'Đi chậm, đọc biển chỉ dẫn và giữ trẻ em trong tầm nhìn.'},
      {title: 'Nghỉ và chụp ảnh', body: 'Dừng ở bóng râm, uống nước và chụp ảnh từ vị trí an toàn.'},
    ],
    notes: 'Không cho ăn động vật, không vượt rào hay chạm chuồng. Kiểm tra thời tiết; một số khu ngoài trời hạn chế khi nắng gắt hoặc mưa. Tuân thủ biển báo tại chỗ.',
    photos: [
      {src: '/images/dai-nam-voi.jpg', alt: 'Voi tại Đại Nam, ảnh lưu trữ 2011', credit: 'Bùi Thụy Đào Nguyên · 2011 · CC BY-SA 3.0'},
    ],
    stay: 'Khu vực Phú An và lân cận có các lựa chọn nghỉ lại; xem hướng dẫn tìm chỗ ở xung quanh và xác nhận khoảng cách, giá và điều kiện trực tiếp.',
    faq: [
      {q: 'Vườn thú Đại Nam có mở cửa mỗi ngày không?', a: 'Chưa xác minh lịch cố định. Hỏi đơn vị vận hành theo đúng phân khu và ngày đi; xem Giờ mở cửa.'},
      {q: 'Có phù hợp cho trẻ em không?', a: 'Thường phù hợp nhờ tuyến đi bộ và quan sát động vật, nhưng xác nhận khu trẻ em và điều kiện an toàn trước khi đến.'},
      {q: 'Vé vườn thú có bao gồm trong vé cổng không?', a: 'Chưa chắc. Vé cổng, vé vườn thú và dịch vụ có thể tách biệt; xem Vé và chi phí.'},
      {q: 'Có được cho động vật ăn không?', a: 'Không. Giữ khoảng cách, không cho ăn và không vượt rào theo quy định tại chỗ.'},
      {q: 'Ở bao lâu là đủ?', a: 'Khoảng 1–2 giờ nếu kết hợp với các phân khu khác; nhiều hơn nếu chỉ tập trung vườn thú.'},
      {q: 'Ảnh voi 2011 có phải động vật hiện có không?', a: 'Không. Ảnh là tư liệu lưu trữ, không xác nhận cá thể hay khu trưng bày còn hoạt động hôm nay.'},
    ],
    related: ['bien-nhan-tao-dai-nam', 'kim-dien-dai-nam', 'ban-do-khu-du-lich-dai-nam', 'directions', 'tickets', 'dai-nam-cho-gia-dinh'],
  },

  // 2. Biển nhân tạo Đại Nam
  {
    slug: 'bien-nhan-tao-dai-nam',
    title: 'Biển nhân tạo Đại Nam – Vé, trải nghiệm & lưu ý',
    h1: 'Biển nhân tạo Đại Nam – Cẩm nang tham quan',
    description: 'Biển nhân tạo Đại Nam có gì, cần chuẩn bị gì và cách xác nhận vé, giờ theo từng ngày. Xem trước khi đi.',
    eyebrow: 'Phân khu – Nước',
    intro: 'Biển nhân tạo là hạng mục nổi bật được đơn vị vận hành giới thiệu, bên cạnh đền thờ, vườn thú và trường đua.',
    explore: 'Là một trong những điểm được nhắc đến nhiều nhất khi tìm "biển Đại Nam", khu vực này hướng tới trải nghiệm nước và nghỉ ngơi cuối tuần. Bài giới thiệu trên website đơn vị vận hành mang ngày 06/10/2021 và vẫn có bảng giờ/giá cũ, không dùng làm lịch hiện hành.',
    tips: 'Phù hợp nhóm bạn, gia đình và người muốn kết hợp tắm biển nhân tạo với tham quan. Mang đồ bơi, khăn, đồ bơi cho trẻ, kem chống nắng và đồ khô để đổi.',
    highlights: [
      {title: 'Hồ nước nhân tạo', body: 'Không phải biển tự nhiên; xác nhận điều kiện mở cửa và khu vực được phép xuống nước.'},
      {title: 'Trò chơi nước', body: 'Hỏi danh sách trò chơi, giới hạn chiều cao/tuổi và quy định an toàn trước khi mua.'},
      {title: 'Gửi đồ và thay đồ', body: 'Hỏi khu vực gửi đồ, tủ khóa và nhà vệ sinh gần bãi biển nhân tạo.'},
    ],
    about: 'Đơn vị vận hành giới thiệu biển nhân tạo như một phân khu giải trí nước trong tổng thể khu du lịch văn hóa – thể thao.',
    basic: 'Địa điểm: trong Khu du lịch Đại Nam, '+ADDRESS+'. Là phân khu giải trí nước, khác với các phân khu văn hóa và động vật.',
    hours: 'Chưa xác minh lịch biển nhân tạo có ngày áp dụng. Xem Giờ mở cửa và hỏi đơn vị vận hành; biển, trò chơi nước có thể không theo giờ cổng chung.',
    tickets: 'Biển nhân tạo có thể có vé/phí riêng, khác vé cổng. Xem Vé và chi phí và xác nhận điều kiện, độ tuổi/chiều cao trước khi thanh toán.',
    directions: 'Từ TP.HCM theo QL13/Đại lộ Bình Dương đến địa chỉ tham chiếu. Xem Đường đi để xác nhận cổng và điểm trả khách.',
    discovery: 'Trải nghiệm nước tại khu vực nhân tạo kết hợp nghỉ ngơi và vui chơi, thuận tiện cho ngày cuối tuần nhưng phụ thuộc thời tiết và lịch vận hành.',
    route: [
      {title: 'Xác nhận trước khi xuống nước', body: 'Hỏi giờ nhận khách, khu vực được phép xuống nước và giới hạn an toàn.'},
      {title: 'Chuẩn bị và gửi đồ', body: 'Đổi đồ bơi, gửi đồ giá trị và giữ vé/phiếu nhận đồ.'},
      {title: 'Vui chơi và nghỉ ngơi', body: 'Luân phiên dưới nắng và bóng râm; bù nước và theo dõi trẻ em sát sao.'},
    ],
    notes: 'An toàn trẻ em là ưu tiên: không rời mắt, tuân thủ giới hạn chiều cao/tuổi và biển báo. Kiểm tra dự báo thời tiết; hoạt động nước dễ bị ảnh hưởng mưa/bão. Không mặc định vé cổng bao gồm trò chơi nước.',
    photos: [
      {src: '/images/dai-nam-bien-nhan-tao.jpg', alt: 'Biển nhân tạo Đại Nam', credit: 'Liftold · Wikimedia Commons · CC BY-SA 3.0'},
    ],
    stay: 'Nếu đi xa hoặc muốn nghỉ lại, xem hướng dẫn chỗ ở xung quanh và xác nhận khoảng cách, giá, điều kiện hủy trước khi đặt.',
    faq: [
      {q: 'Biển nhân tạo Đại Nam có phải biển thật không?', a: 'Không. Đây là hồ nước nhân tạo trong khu du lịch; xác nhận điều kiện xuống nước trước khi đến.'},
      {q: 'Giờ mở cửa cố định không?', a: 'Chưa xác minh. Xem Giờ mở cửa và hỏi đơn vị vận hành theo đúng phân khu.'},
      {q: 'Vé biển có riêng không?', a: 'Có thể. Biển nhân tạo thường có điều kiện riêng, khác vé cổng; xem Vé và chi phí.'},
      {q: 'Cần chuẩn bị gì?', a: 'Đồ bơi, khăn, kem chống nắng, đồ khô và đồ bơi cho trẻ; hỏi khu gửi đồ trước.'},
      {q: 'Trẻ em chơi được không?', a: 'Được, nhưng cần giám sát sát sao và tuân thủ giới hạn chiều cao/tuổi, biển báo an toàn.'},
      {q: 'Thời tiết ảnh hưởng không?', a: 'Có. Hoạt động nước dễ bị hoãn vì mưa/bão; kiểm tra dự báo và tình trạng trước khi đi.'},
    ],
    related: ['vuon-thu-dai-nam', 'tro-choi-dai-nam', 'ban-do-khu-du-lich-dai-nam', 'directions', 'tickets', 'dai-nam-ngay-mua'],
  },

  // 3. Kim Điện và đền thờ
  {
    slug: 'kim-dien-dai-nam',
    title: 'Kim Điện Đại Nam – Kiến trúc, văn hóa & lưu ý tham quan',
    h1: 'Kim Điện Đại Nam – Cẩm nang tham quan',
    description: 'Kim Điện Đại Nam có gì đặc biệt, cần lưu ý gì khi tham quan và cách đến. Xem thông tin trước chuyến đi.',
    eyebrow: 'Phân khu – Văn hóa',
    intro: 'Kim Điện là không gian thờ tự và kiến trúc được đơn vị vận hành giới thiệu trong Khu du lịch Đại Nam.',
    explore: 'Khác với các phân khu vui chơi, Kim Điện hướng tới trải nghiệm văn hóa và kiến trúc. Đây là không gian tôn nghiêm, nên kết hợp tham quan nhẹ nhàng thay vì hoạt động ồn ào.',
    tips: 'Phù hợp người thích kiến trúc, chụp ảnh và tìm hiểu văn hóa. Dành 45–90 phút; ăn mặc kín đáo, giữ yên lặng.',
    highlights: [
      {title: 'Kiến trúc Kim Điện', body: 'Tìm hiểu họa tiết, bố cục và ý nghĩa không gian thờ tự; chụp ảnh ở góc được cho phép.'},
      {title: 'Không gian tôn nghiêm', body: 'Giữ yên lặng, ăn mặc phù hợp và làm theo biển báo; đây là lời khuyên ứng xử chung.'},
      {title: 'Động tuyến văn hóa', body: 'Kết hợp với quảng trường và các hạng mục văn hóa lân cận trong một tuyến đi bộ.'},
    ],
    about: 'Đơn vị vận hành mô tả Kim Điện như một không gian thờ tự trong tổng thể khu du lịch văn hóa. Thông tin mô tả loại hình, không xác nhận lịch nghi lễ cụ thể.',
    basic: 'Địa điểm: trong Khu du lịch Đại Nam, '+ADDRESS+'. Là phân khu văn hóa – tôn giáo, khác phân khu nước và động vật.',
    hours: 'Chưa xác minh lịch tham quan Kim Điện có ngày áp dụng. Xem Giờ mở cửa và hỏi đơn vị vận hành; không mặc định theo giờ cổng chung.',
    tickets: 'Xác nhận Kim Điện có nằm trong vé cổng hay điều kiện riêng. Xem Vé và chi phí và hỏi đơn vị bán trước khi thanh toán.',
    directions: 'Từ TP.HCM theo QL13/Đại lộ Bình Dương đến địa chỉ tham chiếu. Xem Đường đi để xác nhận cổng và điểm đỗ xe.',
    discovery: 'Kim Điện phản ánh ý đồ kết hợp du lịch văn hóa và tôn giáo tại Đại Nam: kiến trúc hoành tráng, không gian trang nghiêm và cơ hội tìm hiểu địa phương.',
    route: [
      {title: 'Đến quảng trường trung tâm', body: 'Bắt đầu từ khu vực chính, xác định biển chỉ dẫn đến Kim Điện.'},
      {title: 'Tham quan kiến trúc', body: 'Đi chậm, đọc biển giới thiệu và chụp ảnh ở nơi được phép.'},
      {title: 'Giữ gìn không gian tôn nghiêm', body: 'Giữ yên lặng, ăn mặc kín đáo và tuân thủ chỉ dẫn tại chỗ.'},
    ],
    notes: 'Không gian thờ tự: ăn mặc kín đáo, tránh ồn ào, tôn trọng người hành lễ. Không chạm vào hiện vật hay vượt khu vực hạn chế. Tuân thủ biển báo tại chỗ.',
    photos: [
      {src: '/images/dai-nam-cong-rong-vang.jpg', alt: 'Công trình rồng vàng tại Đại Nam', credit: 'Liftold · Wikimedia Commons · CC BY-SA 3.0'},
    ],
    stay: 'Nếu muốn kết hợp tham quan dài hơn, xem hướng dẫn chỗ ở xung quanh và xác nhận điều kiện trước khi đặt.',
    faq: [
      {q: 'Kim Điện là chùa hay đền?', a: 'Được đơn vị vận hành giới thiệu là không gian thờ tự; xác nhận cụ thể với đơn vị vận hành.'},
      {q: 'Có cần vé riêng không?', a: 'Chưa xác minh. Xem Vé và chi phí và hỏi đơn vị bán về điều kiện vào Kim Điện.'},
      {q: 'Mặc gì khi tham quan?', a: 'Ăn mặc kín đáo, tôn nghiêm; giữ yên lặng và làm theo biển báo.'},
      {q: 'Chụp ảnh được không?', a: 'Thường được ở khu vực cho phép; tránh nơi hành lễ và tôn trọng quy định tại chỗ.'},
      {q: 'Mất bao lâu?', a: 'Khoảng 45–90 phút tùy mức độ quan tâm kiến trúc và văn hóa.'},
      {q: 'Có mở cửa mỗi ngày không?', a: 'Chưa xác minh lịch cố định; xem Giờ mở cửa và hỏi đơn vị vận hành.'},
    ],
    related: ['vuon-thu-dai-nam', 'ban-do-khu-du-lich-dai-nam', 'directions', 'tickets', 'dai-nam-cho-cap-doi'],
  },

  // 4. Trường đua Đại Nam
  {
    slug: 'truong-dua-dai-nam',
    title: 'Trường đua Đại Nam – Giới thiệu & cách xác nhận lịch',
    h1: 'Trường đua Đại Nam – Cẩm nang tham quan',
    description: 'Trường đua Đại Nam có gì, có xem đua ngựa được không và cách xác nhận lịch sự kiện. Xem trước khi đi.',
    eyebrow: 'Phân khu – Thể thao',
    intro: 'Trường đua là một trong những phân khu thể thao được đơn vị vận hành giới thiệu tại Khu du lịch Đại Nam.',
    explore: 'Với người thích thể thao và giải trí, trường đua mang lại khác biệt so với các phân khu văn hóa hay nước. Tuy nhiên, lịch thi đấu thay đổi theo ngày và không cố định.',
    tips: 'Phù hợp người lớn, nhóm bạn thích sự kiện thể thao. Trước khi đi, xác nhận có sự kiện vào ngày đến hay không; không mặc định trường đua luôn có hoạt động.',
    highlights: [
      {title: 'Sân trường đua', body: 'Tìm hiểu quy mô và vị trí trường đua trong khu; xác nhận khu vực khán giả được mở.'},
      {title: 'Loại hình sự kiện', body: 'Hỏi loại hình thi đấu, lịch ngày và điều kiện tham dự với đơn vị vận hành.'},
      {title: 'Lịch thay đổi', body: 'Lịch thi đấu không cố định; chỉ xác nhận được qua đơn vị vận hành sát ngày đi.'},
    ],
    about: 'Đơn vị vận hành liệt kê trường đua trong các phân khu thể thao của khu du lịch. Thông tin mô tả loại hình, không xác nhận lịch thi đấu hiện hành.',
    basic: 'Địa điểm: trong Khu du lịch Đại Nam, '+ADDRESS+'. Là phân khu thể thao, khác phân khu văn hóa và nước.',
    hours: 'Chưa xác minh lịch trường đua có ngày áp dụng. Xem Giờ mở cửa và hỏi đơn vị vận hành về ngày có sự kiện.',
    tickets: 'Sự kiện tại trường đua có thể có vé/điều kiện riêng. Xem Vé và chi phí và xác nhận với đơn vị bán.',
    directions: 'Từ TP.HCM theo QL13/Đại lộ Bình Dương đến địa chỉ tham chiếu. Xem Đường đi để xác nhận cổng và bãi đỗ.',
    discovery: 'Trường đua phản ánh mảng giải trí thể thao của Đại Nam, khác biệt với đền thờ và biển nhân tạo, nhưng cần xác nhận lịch sát ngày.',
    route: [
      {title: 'Xác nhận sự kiện trước', body: 'Hỏi đơn vị vận hành ngày có thi đấu và điều kiện tham dự.'},
      {title: 'Đến và định hướng', body: 'Dùng bản đồ khu để tìm trường đua và khu khán giả.'},
      {title: 'Tham quan an toàn', body: 'Giữ khoảng cách an toàn với đường đua và tuân thủ biển báo.'},
    ],
    notes: 'An toàn là ưu tiên gần khu thi đấu: giữ khoảng cách với đường đua, không vượt rào và tuân thủ hướng dẫn tại chỗ. Xác nhận lịch trước vì không mở cố định.',
    photos: [
      {src: '/images/dai-nam-quang-truong.jpg', alt: 'Quảng trường trung tâm Khu du lịch Đại Nam', credit: 'Xuanphuocle · Wikimedia Commons · CC0'},
    ],
    stay: 'Nếu sự kiện diễn ra chiều tối, xem hướng dẫn chỗ ở xung quanh và xác nhận điều kiện trước khi đặt.',
    faq: [
      {q: 'Có xem đua ngựa mỗi ngày không?', a: 'Chưa xác minh. Lịch thi đấu thay đổi; hỏi đơn vị vận hành ngày có sự kiện.'},
      {q: 'Có vé riêng cho trường đua không?', a: 'Có thể. Sự kiện thể thao thường có điều kiện riêng; xem Vé và chi phí.'},
      {q: 'Trẻ em vào được không?', a: 'Hỏi điều kiện độ tuổi và an toàn với đơn vị vận hành trước khi đến.'},
      {q: 'Ở đâu để xem?', a: 'Xác nhận khu vực khán giả được mở và điều kiện vào cửa với đơn vị vận hành.'},
      {q: 'Có an toàn không?', a: 'Giữ khoảng cách với đường đua, không vượt rào và tuân thủ biển báo tại chỗ.'},
    ],
    related: ['kim-dien-dai-nam', 'ban-do-khu-du-lich-dai-nam', 'directions', 'tickets'],
  },

  // 5. Tổng quan trò chơi Đại Nam
  {
    slug: 'tro-choi-dai-nam',
    title: 'Trò chơi Đại Nam – Tổng quan các hạng mục & lưu ý',
    h1: 'Trò chơi Đại Nam – Cẩm nang tham quan',
    description: 'Các trò chơi tại Đại Nam gồm những gì, phân theo mức độ nào và cách xác nhận giờ, vé. Xem trước khi đi.',
    eyebrow: 'Phân khu – Giải trí',
    intro: 'Bên cạnh văn hóa, động vật và biển nhân tạo, Khu du lịch Đại Nam được giới thiệu có các hạng mục trò chơi giải trí.',
    explore: 'Khu trò chơi thường là điểm thu hút nhóm bạn và gia đình. Để lên kế hoạch, nên phân biệt trò chơi nhẹ, trò chơi trẻ em và trò chơi cảm giác mạnh vì điều kiện an toàn và vé có thể khác nhau.',
    tips: 'Phù hợp nhiều lứa tuổi nếu chọn đúng phân nhóm. Dành 2–4 giờ nếu chơi nhiều hạng mục; kiểm tra giới hạn chiều cao/tuổi trước.',
    highlights: [
      {title: 'Nhiều nhóm trò chơi', body: 'Từ trò chơi gia đình đến cảm giác mạnh; xem các trang trò chơi trẻ em và cảm giác mạnh để chi tiết.'},
      {title: 'Điều kiện an toàn', body: 'Mỗi trò chơi có giới hạn chiều cao/tuổi và sức khỏe riêng; hỏi trước khi xếp hàng.'},
      {title: 'Vé theo hạng mục', body: 'Trò chơi có thể tính riêng hoặc theo combo; xem Vé và chi phí.'},
    ],
    about: 'Đơn vị vận hành giới thiệu các hạng mục giải trí trong tổng thể khu du lịch. Thông tin mô tả loại hình, không xác nhận từng trò chơi mở cửa hôm nay.',
    basic: 'Địa điểm: trong Khu du lịch Đại Nam, '+ADDRESS+'. Là phân khu giải trí, khác phân khu văn hóa và nước.',
    hours: 'Chưa xác minh lịch từng trò chơi có ngày áp dụng. Xem Giờ mở cửa và hỏi đơn vị vận hành; trò chơi ngoài trời dễ bị ảnh hưởng thời tiết.',
    tickets: 'Trò chơi có thể có vé đơn hoặc combo. Xem Vé và chi phí và xác nhận điều kiện, độ tuổi/chiều cao trước khi mua.',
    directions: 'Từ TP.HCM theo QL13/Đại lộ Bình Dương đến địa chỉ tham chiếu. Xem Đường đi để xác nhận cổng và bãi đỗ.',
    discovery: 'Khu trò chơi bổ sung mảng giải trí năng động cho Đại Nam, phù hợp kết hợp với tham quan văn hóa trong cùng một ngày.',
    route: [
      {title: 'Chọn nhóm trò chơi', body: 'Phân loại theo lứa tuổi và mức độ; ưu tiên trò chơi phù hợp trẻ em nếu đi gia đình.'},
      {title: 'Kiểm tra điều kiện', body: 'Hỏi giới hạn chiều cao/tuổi và sức khỏe tại từng trò chơi.'},
      {title: 'Lên lịch và nghỉ', body: 'Luân phiên chơi và nghỉ; tránh xếp hàng quá lâu lúc nắng gắt.'},
    ],
    notes: 'Tuân thủ giới hạn chiều cao/tuổi và sức khỏe; không ép trẻ em chơi trò vượt mức. Kiểm tra thời tiết với trò chơi ngoài trời. Giữ vé/phiếu và tuân thủ biển báo.',
    photos: [
      {src: '/images/dai-nam-cong-rong-vang.jpg', alt: 'Công trình rồng vàng tại Đại Nam', credit: 'Liftold · Wikimedia Commons · CC BY-SA 3.0'},
    ],
    stay: 'Nếu chơi cả ngày, xem hướng dẫn chỗ ở xung quanh và xác nhận điều kiện trước khi đặt.',
    faq: [
      {q: 'Đại Nam có trò chơi cảm giác mạnh không?', a: 'Có được giới thiệu; xem trang trò chơi cảm giác mạnh và xác nhận trò chơi đang mở.'},
      {q: 'Có khu riêng cho trẻ em không?', a: 'Có trang trò chơi trẻ em; hỏi điều kiện độ tuổi và an toàn trước khi đến.'},
      {q: 'Vé trò chơi bao gồm vé cổng không?', a: 'Chưa chắc. Có thể tính riêng hoặc combo; xem Vé và chi phí.'},
      {q: 'Trò chơi có mở mỗi ngày không?', a: 'Chưa xác minh lịch cố định; xem Giờ mở cửa và hỏi đơn vị vận hành.'},
      {q: 'Thời tiết ảnh hưởng không?', a: 'Có, nhất là trò chơi ngoài trời; kiểm tra dự báo và tình trạng trước khi đi.'},
    ],
    related: ['tro-choi-cam-giac-manh', 'tro-choi-tre-em', 'bien-nhan-tao-dai-nam', 'directions', 'tickets', 'combo-ve-dai-nam'],
  },

  // 6. Trò chơi cảm giác mạnh
  {
    slug: 'tro-choi-cam-giac-manh',
    title: 'Trò chơi cảm giác mạnh Đại Nam – Lưu ý an toàn & vé',
    h1: 'Trò chơi cảm giác mạnh Đại Nam – Cẩm nang',
    description: 'Các trò chơi cảm giác mạnh tại Đại Nam gồm gì, cần điều kiện nào và cách xác nhận giờ, vé. Xem trước khi đi.',
    eyebrow: 'Phân khu – Cảm giác mạnh',
    intro: 'Bên cạnh trò chơi gia đình, Khu du lịch Đại Nam được giới thiệu có các hạng mục cảm giác mạnh dành cho người thích thử thách.',
    explore: 'Đây là nhóm dành cho người yêu thích vận tốc và độ cao. Quan trọng nhất là xác nhận trò chơi nào đang mở và điều kiện an toàn trước khi xếp hàng.',
    tips: 'Dành cho người lớn và thanh thiếu niên đủ điều kiện sức khỏe. Kiểm tra giới hạn chiều cao, tuổi và sức khỏe trước; không nên chơi khi no hoặc mệt.',
    highlights: [
      {title: 'Các hạng mục thử thách', body: 'Hỏi danh sách trò chơi cảm giác mạnh đang hoạt động và mức độ từng trò.'},
      {title: 'Điều kiện an toàn', body: 'Mỗi trò có giới hạn chiều cao, tuổi và sức khỏe riêng; tuân thủ hướng dẫn tại chỗ.'},
      {title: 'Thời điểm chơi', body: 'Tránh xếp hàng lúc nắng gắt; chơi sớm hoặc cuối chiều để đỡ nóng.'},
    ],
    about: 'Đơn vị vận hành giới thiệu các hạng mục giải trí, trong đó có nhóm cảm giác mạnh. Thông tin mô tả loại hình, không xác nhận từng trò mở cửa hôm nay.',
    basic: 'Địa điểm: trong Khu du lịch Đại Nam, '+ADDRESS+'. Là nhóm trò chơi giải trí, khác phân khu văn hóa và nước.',
    hours: 'Chưa xác minh lịch trò chơi cảm giác mạnh có ngày áp dụng. Xem Giờ mở cửa và hỏi đơn vị vận hành; trò ngoài trời dễ bị ảnh hưởng thời tiết.',
    tickets: 'Có thể tính riêng hoặc theo combo. Xem Vé và chi phí và xác nhận điều kiện, độ tuổi/chiều cao trước khi mua.',
    directions: 'Từ TP.HCM theo QL13/Đại lộ Bình Dương đến địa chỉ tham chiếu. Xem Đường đi để xác nhận cổng và bãi đỗ.',
    discovery: 'Nhóm cảm giác mạnh bổ sung mảng giải trí năng động, cân bằng với tham quan văn hóa và nghỉ ngơi trong ngày.',
    route: [
      {title: 'Xác nhận trò chơi mở', body: 'Hỏi danh sách và điều kiện trước khi xếp hàng.'},
      {title: 'Kiểm tra sức khỏe', body: 'Đảm bảo đủ điều kiện; không chơi khi không khỏe.'},
      {title: 'Tuân thủ hướng dẫn', body: 'Nghe nhân viên, thắt dây an toàn và làm theo biển báo.'},
    ],
    notes: 'Không ép bản thân vượt mức; tuân thủ giới hạn sức khỏe, chiều cao, tuổi. Trò ngoài trời dễ hoãn vì thời tiết. Giữ vé/phiếu và tuân thủ biển báo an toàn.',
    photos: [
      {src: '/images/dai-nam-cong-rong-vang.jpg', alt: 'Công trình rồng vàng tại Đại Nam', credit: 'Liftold · Wikimedia Commons · CC BY-SA 3.0'},
    ],
    stay: 'Nếu chơi cả ngày, xem hướng dẫn chỗ ở xung quanh và xác nhận điều kiện trước khi đặt.',
    faq: [
      {q: 'Đại Nam có trò chơi cảm giác mạnh nào?', a: 'Được giới thiệu có nhóm cảm giác mạnh; hỏi đơn vị vận hành trò nào đang mở.'},
      {q: 'Có giới hạn chiều cao không?', a: 'Có, mỗi trò có giới hạn riêng; kiểm tra tại chỗ trước khi chơi.'},
      {q: 'Trẻ em chơi được không?', a: 'Tùy trò và điều kiện độ tuổi/sức khỏe; hỏi nhân viên trước.'},
      {q: 'Vé tính riêng không?', a: 'Có thể tính riêng hoặc combo; xem Vé và chi phí.'},
      {q: 'Thời tiết ảnh hưởng không?', a: 'Có, trò ngoài trời dễ hoãn; kiểm tra dự báo trước khi đi.'},
    ],
    related: ['tro-choi-dai-nam', 'tro-choi-tre-em', 'tickets', 'directions'],
  },

  // 7. Trò chơi trẻ em
  {
    slug: 'tro-choi-tre-em',
    title: 'Trò chơi trẻ em Đại Nam – An toàn & gợi ý',
    h1: 'Trò chơi trẻ em Đại Nam – Cẩm nang',
    description: 'Khu trò chơi trẻ em tại Đại Nam có gì, an toàn thế nào và cách xác nhận giờ, vé. Xem trước khi đi.',
    eyebrow: 'Phân khu – Gia đình',
    intro: 'Dành cho gia đình, Khu du lịch Đại Nam được giới thiệu có các hạng mục trò chơi phù hợp trẻ em.',
    explore: 'Đây thường là điểm các phụ huynh ưu tiên: tuyến ngắn, an toàn và dễ giám sát. Kết hợp với vườn thú để tạo ngày vui chơi cho bé.',
    tips: 'Phù hợp trẻ em và gia đình. Giám sát sát sao, kiểm tra giới hạn chiều cao/tuổi và chuẩn bị nghỉ, nước uống.',
    highlights: [
      {title: 'Tuyến an toàn cho bé', body: 'Chọn trò phù hợp lứa tuổi; hỏi nhân viên về điều kiện trước khi cho bé chơi.'},
      {title: 'Dễ giám sát', body: 'Ưu tiên khu vực gọn, ít bước đi và gần chỗ nghỉ.'},
      {title: 'Kết hợp vườn thú', body: 'Ghép trò chơi trẻ em với vườn thú thành nửa ngày nhẹ nhàng.'},
    ],
    about: 'Đơn vị vận hành giới thiệu các hạng mục giải trí, trong đó có nhóm trẻ em. Thông tin mô tả loại hình, không xác nhận từng trò mở cửa hôm nay.',
    basic: 'Địa điểm: trong Khu du lịch Đại Nam, '+ADDRESS+'. Là nhóm trò chơi gia đình.',
    hours: 'Chưa xác minh lịch trò chơi trẻ em có ngày áp dụng. Xem Giờ mở cửa và hỏi đơn vị vận hành.',
    tickets: 'Có thể tính riêng hoặc theo combo. Xem Vé và chi phí và xác nhận điều kiện trước khi mua.',
    directions: 'Từ TP.HCM theo QL13/Đại lộ Bình Dương đến địa chỉ tham chiếu. Xem Đường đi để xác nhận cổng và bãi đỗ.',
    discovery: 'Khu trẻ em giúp Đại Nam trở thành lựa chọn ngày cuối tuần cho gia đình, cân bằng vui chơi và tham quan.',
    route: [
      {title: 'Định hướng khu trẻ em', body: 'Hỏi bản đồ và vị trí khu trò chơi trẻ em khi vào cổng.'},
      {title: 'Chọn trò phù hợp', body: 'Kiểm tra độ tuổi/chiều cao và giám sát khi bé chơi.'},
      {title: 'Nghỉ và tiếp nước', body: 'Sắp xếp nghỉ giữa các trò, tránh nắng gắt.'},
    ],
    notes: 'Giám sát trẻ mọi lúc; tuân thủ giới hạn chiều cao/tuổi và biển báo. Giữ bé trong tầm nhìn, chuẩn bị mũ, nước và kem chống nắng.',
    photos: [
      {src: '/images/dai-nam-quang-truong.jpg', alt: 'Quảng trường trung tâm Khu du lịch Đại Nam', credit: 'Xuanphuocle · Wikimedia Commons · CC0'},
    ],
    stay: 'Nếu đi xa, xem hướng dẫn chỗ ở xung quanh và xác nhận điều kiện trước khi đặt.',
    faq: [
      {q: 'Có khu riêng cho trẻ em không?', a: 'Có được giới thiệu; hỏi đơn vị vận hành vị trí và điều kiện.'},
      {q: 'Trẻ em mấy tuổi chơi được?', a: 'Tùy trò và giới hạn độ tuổi/chiều cao; kiểm tra tại chỗ.'},
      {q: 'Có an toàn không?', a: 'Tuân thủ hướng dẫn và giám sát sát sao; không ép bé chơi trò vượt mức.'},
      {q: 'Vé trẻ em thế nào?', a: 'Xem Vé và chi phí; xác nhận tiêu chuẩn tuổi/chiều cao với đơn vị bán.'},
      {q: 'Kết hợp với gì?', a: 'Dễ ghép với vườn thú và quảng trường thành nửa ngày cho gia đình.'},
    ],
    related: ['tro-choi-dai-nam', 'vuon-thu-dai-nam', 'dai-nam-cho-gia-dinh', 'tickets', 'directions'],
  },

  // 8. Nông trại Càng Cua
  {
    slug: 'nong-trai-cang-cua',
    title: 'Nông trại Càng Cua Đại Nam – Trải nghiệm & lưu ý',
    h1: 'Nông trại Càng Cua Đại Nam – Cẩm nang',
    description: 'Nông trại Càng Cua tại Đại Nam có trải nghiệm gì, phù hợp ai và cách xác nhận lịch. Xem trước khi đi.',
    eyebrow: 'Phân khu – Nông nghiệp',
    intro: 'Càng Cua là phân khu nông nghiệp/trải nghiệm được đơn vị vận hành giới thiệu trong Khu du lịch Đại Nam.',
    explore: 'Khác với trò chơi và biển nhân tạo, nông trại hướng tới trải nghiệm thiên nhiên, nông nghiệp và tìm hiểu sinh thái – phù hợp gia đình và trẻ em.',
    tips: 'Phù hợp gia đình, nhóm học sinh và người thích thiên nhiên. Mang mũ, nước và giày đi bộ; dành 1–2 giờ.',
    highlights: [
      {title: 'Trải nghiệm nông nghiệp', body: 'Tìm hiểu quy trình và môi trường nông trại; xác nhận hoạt động ngày đi.'},
      {title: 'Góc học cho trẻ', body: 'Trẻ em làm quen với thiên nhiên và sinh thái theo cách trực quan.'},
      {title: 'Kết hợp tham quan', body: 'Dễ ghép với vườn thú thành tuyến nhẹ nhàng cho gia đình.'},
    ],
    about: 'Đơn vị vận hành liệt kê Càng Cua trong các phân khu của khu du lịch. Thông tin mô tả loại hình, không xác nhận hoạt động cụ thể hôm nay.',
    basic: 'Địa điểm: trong Khu du lịch Đại Nam, '+ADDRESS+'. Là phân khu nông nghiệp – sinh thái.',
    hours: 'Chưa xác minh lịch nông trại có ngày áp dụng. Xem Giờ mở cửa và hỏi đơn vị vận hành.',
    tickets: 'Xác nhận nông trại có trong vé cổng hay điều kiện riêng. Xem Vé và chi phí.',
    directions: 'Từ TP.HCM theo QL13/Đại lộ Bình Dương đến địa chỉ tham chiếu. Xem Đường đi để xác nhận cổng và bãi đỗ.',
    discovery: 'Nông trại phản ánh mảng sinh thái – giáo dục của Đại Nam, cân bằng với giải trí năng động.',
    route: [
      {title: 'Xác nhận hoạt động', body: 'Hỏi đơn vị vận hành khu nông trại mở và hoạt động nào ngày đi.'},
      {title: 'Tham quan nhẹ', body: 'Đi chậm, giữ trẻ em gần và không hái/tự ý chạm.'},
      {title: 'Kết hợp tuyến', body: 'Ghép với vườn thú hoặc quảng trường thành nửa ngày.'},
    ],
    notes: 'Giữ trẻ em trong tầm nhìn; không tự ý hái hoặc chạm cây/con vật nuôi. Kiểm tra thời tiết; khu ngoài trời hạn chế khi nắng gắt hoặc mưa.',
    photos: [
      {src: '/images/dai-nam-quang-truong.jpg', alt: 'Quảng trường trung tâm Khu du lịch Đại Nam', credit: 'Xuanphuocle · Wikimedia Commons · CC0'},
    ],
    stay: 'Nếu đi xa, xem hướng dẫn chỗ ở xung quanh và xác nhận điều kiện trước khi đặt.',
    faq: [
      {q: 'Càng Cua là gì?', a: 'Được giới thiệu là phân khu nông nghiệp/trải nghiệm; hỏi đơn vị vận hành chi tiết.'},
      {q: 'Có phù hợp trẻ em không?', a: 'Thường phù hợp nhờ trải nghiệm thiên nhiên; xác nhận hoạt động ngày đi.'},
      {q: 'Có vé riêng không?', a: 'Xác nhận với đơn vị bán; xem Vé và chi phí.'},
      {q: 'Mở cửa mỗi ngày không?', a: 'Chưa xác minh; xem Giờ mở cửa và hỏi đơn vị vận hành.'},
      {q: 'Kết hợp với gì?', a: 'Dễ ghép với vườn thú và quảng trường.'},
    ],
    related: ['vuon-thu-dai-nam', 'tro-choi-tre-em', 'dai-nam-cho-gia-dinh', 'directions', 'tickets'],
  },

  // 9. Hành trình mạo hiểm trên cao
  {
    slug: 'hanh-trinh-mao-hiem-tren-cao',
    title: 'Mạo hiểm trên cao Đại Nam – An toàn & lưu ý',
    h1: 'Mạo hiểm trên cao Đại Nam – Cẩm nang',
    description: 'Trải nghiệm mạo hiểm trên cao tại Đại Nam gồm gì, cần điều kiện nào và cách xác nhận. Xem trước khi đi.',
    eyebrow: 'Phân khu – Mạo hiểm',
    intro: 'Bên cạnh trò chơi mặt đất, Khu du lịch Đại Nam được giới thiệu có các trải nghiệm mạo hiểm trên cao.',
    explore: 'Dành cho người thích thử thách độ cao: đi bộ trên cao, zipline hoặc các hạng mục tương tự. An toàn là yếu tố hàng đầu.',
    tips: 'Dành cho người đủ điều kiện sức khỏe và không sợ độ cao. Kiểm tra giới hạn chiều cao/tuổi và thời tiết trước.',
    highlights: [
      {title: 'Trải nghiệm độ cao', body: 'Hỏi danh sách hạng mục mạo hiểm đang mở và mức độ từng trò.'},
      {title: 'Thiết bị an toàn', body: 'Tuân thủ đeo dây, mũ và hướng dẫn của nhân viên trước khi bắt đầu.'},
      {title: 'Phụ thuộc thời tiết', body: 'Hoạt động trên cao dễ hoãn khi gió mạnh hoặc mưa; kiểm tra trước.'},
    ],
    about: 'Đơn vị vận hành giới thiệu các hạng mục mạo hiểm, trong đó có trải nghiệm trên cao. Thông tin mô tả loại hình, không xác nhận hạng mục mở cửa hôm nay.',
    basic: 'Địa điểm: trong Khu du lịch Đại Nam, '+ADDRESS+'. Là nhóm trải nghiệm mạo hiểm.',
    hours: 'Chưa xác minh lịch trải nghiệm trên cao có ngày áp dụng. Xem Giờ mở cửa và hỏi đơn vị vận hành; dễ bị ảnh hưởng thời tiết.',
    tickets: 'Có thể tính riêng hoặc theo combo. Xem Vé và chi phí và xác nhận điều kiện trước khi mua.',
    directions: 'Từ TP.HCM theo QL13/Đại lộ Bình Dương đến địa chỉ tham chiếu. Xem Đường đi để xác nhận cổng và bãi đỗ.',
    discovery: 'Trải nghiệm trên cao bổ sung mảng phiêu lưu, khác biệt với tham quan văn hóa và nghỉ ngơi.',
    route: [
      {title: 'Xác nhận hạng mục', body: 'Hỏi danh sách và điều kiện an toàn trước khi tham gia.'},
      {title: 'Kiểm tra sức khỏe', body: 'Đảm bảo đủ điều kiện; không tham gia khi không khỏe hoặc sợ độ cao.'},
      {title: 'Tuân thủ thiết bị', body: 'Đeo dây an toàn, mũ và làm theo nhân viên.'},
    ],
    notes: 'Không tham gia nếu không đủ điều kiện sức khỏe hoặc sợ độ cao. Hoạt động trên cao hoãn khi thời tiết xấu; tuân thủ biển báo và hướng dẫn viên.',
    photos: [
      {src: '/images/dai-nam-cong-rong-vang.jpg', alt: 'Công trình rồng vàng tại Đại Nam', credit: 'Liftold · Wikimedia Commons · CC BY-SA 3.0'},
    ],
    stay: 'Nếu chơi cả ngày, xem hướng dẫn chỗ ở xung quanh và xác nhận điều kiện trước khi đặt.',
    faq: [
      {q: 'Đại Nam có trải nghiệm trên cao không?', a: 'Được giới thiệu có; hỏi đơn vị vận hành hạng mục nào đang mở.'},
      {q: 'Có giới hạn không?', a: 'Có giới hạn chiều cao, tuổi và sức khỏe; kiểm tra tại chỗ.'},
      {q: 'An toàn thế nào?', a: 'Tuân thủ thiết bị và hướng dẫn viên; hoạt động hoãn khi thời tiết xấu.'},
      {q: 'Vé tính riêng không?', a: 'Có thể tính riêng hoặc combo; xem Vé và chi phí.'},
      {q: 'Thời tiết ảnh hưởng không?', a: 'Có, hoạt động trên cao dễ hoãn khi gió/mưa; kiểm tra dự báo.'},
    ],
    related: ['tro-choi-cam-giac-manh', 'tro-choi-dai-nam', 'tickets', 'directions'],
  },

  // 10. Bản đồ & phân khu Đại Nam
  {
    slug: 'ban-do-khu-du-lich-dai-nam',
    title: 'Bản đồ Khu du lịch Đại Nam – Phân khu & định hướng',
    h1: 'Bản đồ Khu du lịch Đại Nam – Định hướng',
    description: 'Sơ đồ Khu du lịch Đại Nam: các phân khu, cổng vào, tuyến đi bộ và cách dùng bản đồ trước chuyến đi.',
    eyebrow: 'Bản đồ & Định hướng',
    intro: 'Khu du lịch Đại Nam là tổ hợp rộng với nhiều phân khu: văn hóa, động vật, nước, thể thao và giải trí. Bản đồ giúp lập kế hoạch trước.',
    explore: 'Hiểu vị trí tương đối của các phân khu giúp bạn chọn tuyến phù hợp: văn hóa ở đâu, vườn thú ở đâu, biển nhân tạo và trường đua ở đâu. Bản đồ này chỉ là định hướng chung, không thay thế bản đồ chính thức tại cổng.',
    tips: 'Trước khi đi, xem ảnh sơ đồ phân khu và xác nhận cổng nhận khách. In hoặc lưu bản đồ chính thức tại cổng để đối chiếu thực tế.',
    highlights: [
      {title: 'Vị trí tương đối', body: 'Các phân khu nằm trong cùng tổng thể; xác nhận khoảng cách đi bộ thực tế tại cổng.'},
      {title: 'Cổng vào', body: 'Xác nhận cổng nhận khách và điểm trả khách; một địa chỉ chung không phải cổng duy nhất.'},
      {title: 'Tuyến đi bộ', body: 'Lên kế hoạch theo nhóm (văn hóa, động vật, nước) để giảm bước đi.'},
      {title: 'Điểm nghỉ', body: 'Chú ý khu vực bóng râm, nhà vệ sinh và điểm uống nước khi lập tuyến.'},
    ],
    about: 'Bản đồ phân khu phản ánh cách đơn vị vận hành giới thiệu tổ hợp Đại Nam. Sơ đồ minh họa chỉ là định hướng, không xác nhận vị trí chính xác hay phân khu đang mở.',
    basic: 'Địa điểm: Khu du lịch Đại Nam, '+ADDRESS+'. Tổ hợp văn hóa – giải trí – thể thao đa phân khu.',
    hours: 'Giờ từng phân khu chưa xác minh cố định. Xem Giờ mở cửa và hỏi đơn vị vận hành theo đúng phân khu.',
    tickets: 'Vé cổng và vé từng phân khu có thể khác nhau. Xem Vé và chi phí và xác nhận trước khi thanh toán.',
    directions: 'Từ TP.HCM theo QL13/Đại lộ Bình Dương đến địa chỉ tham chiếu. Xem Đường đi để xác nhận cổng và bãi đỗ.',
    discovery: 'Nắm bản đồ tổng thể giúp kết hợp văn hóa, động vật và giải trí trong một ngày mà không bỏ sót điểm quan trọng.',
    route: [
      {title: 'Xem sơ đồ trước', body: 'Xem ảnh phân khu và xác nhận cổng nhận khách trước khi đi.'},
      {title: 'Lấy bản đồ tại cổng', body: 'Nhận bản đồ chính thức và đối chiếu với kế hoạch của bạn.'},
      {title: 'Đi theo nhóm phân khu', body: 'Hoàn thành từng cụm (văn hóa, động vật, nước) rồi chuyển tiếp.'},
    ],
    notes: 'Sơ đồ minh họa không thay thế bản đồ chính thức; khoảng cách thực tế và phân khu mở có thể khác. Xác nhận tại chỗ và tuân thủ biển chỉ dẫn.',
    photos: [
      {src: '/images/zones-diagram.svg', alt: 'Sơ đồ minh họa các phân khu Đại Nam', credit: 'Sơ đồ chức năng nguyên gốc · CC0'},
    ],
    stay: 'Nếu ở lại qua đêm, xem hướng dẫn chỗ ở xung quanh và xác nhận khoảng cách, giá trước khi đặt.',
    faq: [
      {q: 'Có bản đồ chính thức không?', a: 'Nhận tại cổng khi đến; sơ đồ trên trang này chỉ là định hướng chung.'},
      {q: 'Các phân khu cách xa nhau không?', a: 'Nằm trong cùng tổng thể; xác nhận khoảng cách đi bộ thực tế tại cổng.'},
      {q: 'Cổng vào ở đâu?', a: 'Xác nhận cổng nhận khách và điểm trả khách; một địa chỉ chung không phải cổng duy nhất.'},
      {q: 'Lập tuyến thế nào?', a: 'Chia theo cụm văn hóa, động vật, nước để giảm bước đi.'},
      {q: 'Bản đồ này có chính xác không?', a: 'Chỉ là minh họa định hướng; đối chiếu bản đồ chính thức tại cổng.'},
    ],
    related: ['kim-dien-dai-nam', 'vuon-thu-dai-nam', 'bien-nhan-tao-dai-nam', 'truong-dua-dai-nam', 'tro-choi-dai-nam', 'directions'],
  },

  // 11. Vé Đại Nam 2026
  {
    slug: 'gia-ve-dai-nam-2026',
    title: 'Vé Đại Nam 2026 – Chính sách miễn phí & cách xác minh',
    h1: 'Vé Đại Nam 2026 – Cẩm nang xác minh',
    description: 'Chính sách miễn phí cổng 2026 và các khoản phí riêng: cách xác minh với đơn vị vận hành trước khi thanh toán.',
    eyebrow: 'Vé & chi phí – 2026',
    intro: 'Năm 2026 có thông tin bên thứ ba nói về miễn phí cổng và các phân khu tính phí riêng. Trang này tổng hợp cách xác minh, không tự bịa giá.',
    explore: 'Thay vì chép một bảng giá có thể đã cũ, cẩm nang tập trung vào các khoản cần hỏi: cổng, vườn thú, biển nhân tạo, trò chơi và điều kiện trẻ em. Ưu tiên xác nhận với đơn vị vận hành sát ngày đi.',
    tips: 'Trước khi thanh toán, hỏi rõ đơn vị bán: ngày áp dụng, phân khu bao gồm, điều kiện trẻ em và chính sách hoàn đổi. Không chuyển bảng giá cũ sang ngày khác.',
    highlights: [
      {title: 'Miễn phí cổng 2026', body: 'Thông tin miễn phí cổng năm 2026 chưa được đơn vị vận hành xác nhận đầy đủ; hỏi trực tiếp trước khi đi.'},
      {title: 'Phí theo phân khu', body: 'Vườn thú, biển nhân tạo và trò chơi có thể tính riêng; xác nhận từng khoản với đơn vị bán.'},
      {title: 'Tiêu chuẩn trẻ em', body: 'Nếu có giá trẻ em, hỏi tiêu chí tuổi hoặc chiều cao và ngày áp dụng.'},
    ],
    about: 'Trang này bổ sung trang Vé và chi phí bằng bản ghi nhận cần xác minh năm 2026. Nó không thay thế thông báo chính thức của đơn vị vận hành.',
    basic: 'Địa điểm: Khu du lịch Đại Nam, '+ADDRESS+'. Vé và phí do đơn vị vận hành công bố theo từng ngày.',
    tickets: 'Chưa xác minh được biểu giá 2026 áp dụng cho mọi khách và mọi phân khu. Xem Vé và chi phí và hỏi đơn vị bán ngày đi. Không dùng bài bên thứ ba ngày 2021 hay 2026 làm giá cố định.',
    directions: 'Từ TP.HCM theo QL13/Đại lộ Bình Dương đến địa chỉ tham chiếu. Xem Đường đi để xác nhận cổng và bãi đỗ.',
    faq: [
      {q: 'Năm 2026 có miễn phí cổng không?', a: 'Có thông tin bên thứ ba nói miễn phí, nhưng chưa được đơn vị vận hành xác nhận đủ; hỏi trực tiếp trước khi đi.'},
      {q: 'Biển và vườn thú có miễn phí không?', a: 'Chưa chắc; các phân khu có thể tính riêng. Xác nhận từng khoản với đơn vị bán.'},
      {q: 'Trẻ em có giá riêng không?', a: 'Hỏi tiêu chí tuổi/chiều cao và ngày áp dụng; không áp dụng bảng giá cũ.'},
      {q: 'Mua vé ở đâu an toàn?', a: 'Qua đơn vị bán chính thức; cẩm nang không nhận thanh toán hay đặt chỗ.'},
      {q: 'Giá cũ có dùng được không?', a: 'Không. Không chuyển bảng giá cũ sang ngày khác; xác nhận giá ngày đi.'},
    ],
    related: ['gia-ve-vuon-thu-dai-nam', 'gia-ve-bien-dai-nam', 'combo-ve-dai-nam', 'tickets', 'directions'],
  },

  // 12. Vé vườn thú
  {
    slug: 'gia-ve-vuon-thu-dai-nam',
    title: 'Vé vườn thú Đại Nam – Cách xác minh giá',
    h1: 'Vé vườn thú Đại Nam – Cẩm nang',
    description: 'Vé vườn thú Đại Nam có riêng không, trẻ em có giá không và cách xác minh trước khi mua. Xem trước khi đi.',
    eyebrow: 'Vé & chi phí – Vườn thú',
    intro: 'Vườn thú là một phân khu được giới thiệu; vé có thể tách biệt với vé cổng. Trang này hướng dẫn xác minh thay vì đưa giá chưa kiểm chứng.',
    explore: 'Khi đi gia đình, biết rõ vé vườn thú giúp dự tính và tránh hiểu lầm tại cổng. Tập trung vào các câu hỏi cần hỏi đơn vị bán.',
    tips: 'Hỏi đơn vị bán: vé vườn thú bao gồm trong cổng hay riêng, giá trẻ em và điều kiện. Xác nhận sát ngày đi.',
    highlights: [
      {title: 'Vé riêng hay gộp', body: 'Chưa xác minh; hỏi đơn vị bán xem vườn thú nằm trong vé cổng hay tính riêng.'},
      {title: 'Giá trẻ em', body: 'Hỏi tiêu chí tuổi/chiều cao và ngày áp dụng nếu có.'},
      {title: 'Xác minh trước', body: 'Không mặc định miễn phí; xác nhận với đơn vị vận hành ngày đi.'},
    ],
    about: 'Trang này bổ sung trang vườn thú bằng phần vé và chi phí cần xác minh.',
    basic: 'Địa điểm: trong Khu du lịch Đại Nam, '+ADDRESS+'.',
    tickets: 'Vé vườn thú chưa xác minh có ngày áp dụng. Xem Vé Đại Nam 2026 và Vé và chi phí; hỏi đơn vị bán trước khi thanh toán.',
    directions: 'Xem Đường đi để xác nhận cổng và bãi đỗ.',
    faq: [
      {q: 'Vé vườn thú có riêng không?', a: 'Chưa xác minh; hỏi đơn vị bán xem tính riêng hay gộp cổng.'},
      {q: 'Trẻ em có free không?', a: 'Hỏi tiêu chí tuổi/chiều cao; không áp dụng bảng giá cũ.'},
      {q: 'Mua ở đâu?', a: 'Qua đơn vị bán chính thức; cẩm nang không bán vé.'},
      {q: 'Có được dùng vé cũ không?', a: 'Không; xác nhận giá ngày đi.'},
      {q: 'Liên hệ xác minh thế nào?', a: 'Qua đơn vị vận hành/trang vé chính thức trước ngày đến.'},
    ],
    related: ['vuon-thu-dai-nam', 'gia-ve-dai-nam-2026', 'tickets', 'directions'],
  },

  // 13. Vé biển nhân tạo
  {
    slug: 'gia-ve-bien-dai-nam',
    title: 'Vé biển nhân tạo Đại Nam – Cách xác minh',
    h1: 'Vé biển nhân tạo Đại Nam – Cẩm nang',
    description: 'Biển nhân tạo Đại Nam có vé riêng không, trẻ em có giá không và cách xác minh trước khi mua. Xem trước khi đi.',
    eyebrow: 'Vé & chi phí – Biển',
    intro: 'Biển nhân tạo thường là phân khu có điều kiện riêng, khác vé cổng. Hướng dẫn xác minh thay vì đưa giá chưa kiểm chứng.',
    explore: 'Biết rõ vé biển giúp kết hợp tắm biển nhân tạo và trò chơi nước vào kế hoạch. Tập trung câu hỏi cần hỏi đơn vị bán.',
    tips: 'Hỏi: biển có trong vé cổng hay riêng, giới hạn độ tuổi/chiều cao, giá trẻ em và điều kiện trò chơi nước.',
    highlights: [
      {title: 'Vé riêng hay gộp', body: 'Chưa xác minh; hỏi đơn vị bán xem biển nằm trong cổng hay tính riêng.'},
      {title: 'Trò chơi nước', body: 'Hỏi giới hạn chiều cao/tuổi và điều kiện an toàn kèm vé.'},
      {title: 'Xác minh trước', body: 'Không mặc định miễn phí; xác nhận với đơn vị vận hành ngày đi.'},
    ],
    about: 'Trang này bổ sung trang biển nhân tạo bằng phần vé cần xác minh.',
    basic: 'Địa điểm: trong Khu du lịch Đại Nam, '+ADDRESS+'.',
    tickets: 'Vé biển chưa xác minh có ngày áp dụng. Xem Vé Đại Nam 2026 và Vé và chi phí; hỏi đơn vị bán trước khi thanh toán.',
    directions: 'Xem Đường đi để xác nhận cổng và bãi đỗ.',
    faq: [
      {q: 'Biển có vé riêng không?', a: 'Chưa xác minh; hỏi đơn vị bán xem tính riêng hay gộp cổng.'},
      {q: 'Trẻ em chơi biển giá thế nào?', a: 'Hỏi tiêu chí tuổi/chiều cao; không áp dụng giá cũ.'},
      {q: 'Trò chơi nước có gồm không?', a: 'Hỏi điều kiện từng trò kèm vé biển.'},
      {q: 'Mua ở đâu?', a: 'Qua đơn vị bán chính thức; cẩm nang không bán vé.'},
      {q: 'Giá cũ dùng được không?', a: 'Không; xác nhận giá ngày đi.'},
    ],
    related: ['bien-nhan-tao-dai-nam', 'gia-ve-dai-nam-2026', 'tickets', 'directions'],
  },

  // 14. Combo vé
  {
    slug: 'combo-ve-dai-nam',
    title: 'Combo vé Đại Nam – Cách chọn & xác minh',
    h1: 'Combo vé Đại Nam – Cẩm nang',
    description: 'Các gói combo vé Đại Nam gồm gì, có phù hợp không và cách xác minh điều kiện trước khi mua.',
    eyebrow: 'Vé & chi phí – Combo',
    intro: 'Ngoài vé lẻ, đơn vị vận hành có thể có gói combo kết hợp phân khu. Trang này hướng dẫn so sánh và xác minh.',
    explore: 'Combo có thể tiết kiệm nếu bạn định chơi nhiều hạng mục. Quan trọng là biết chính xác phân khu và điều kiện đi kèm.',
    tips: 'So sánh tổng vé lẻ với combo; hỏi phân khu gồm, ngày áp dụng, điều kiện trẻ em và hoàn đổi.',
    highlights: [
      {title: 'So sánh trước', body: 'Cộng vé lẻ các phân khu định chơi, so với giá combo trước khi mua.'},
      {title: 'Điều kiện kèm', body: 'Hỏi phân khu gồm, giới hạn chiều cao/tuổi và ngày áp dụng.'},
      {title: 'Xác minh nguồn', body: 'Qua đơn vị bán chính thức; cẩm nang không bán hay đặt chỗ.'},
    ],
    about: 'Trang này bổ sung trang vé tổng bằng các gói combo cần xác minh.',
    basic: 'Địa điểm: Khu du lịch Đại Nam, '+ADDRESS+'.',
    tickets: 'Combo chưa xác minh có ngày áp dụng. Xem Vé Đại Nam 2026 và Vé và chi phí; hỏi đơn vị bán điều kiện cụ thể.',
    directions: 'Xem Đường đi để xác nhận cổng và bãi đỗ.',
    faq: [
      {q: 'Có combo nào không?', a: 'Đơn vị vận hành có thể có gói kết hợp; hỏi danh sách và điều kiện ngày đi.'},
      {q: 'Combo có rẻ hơn không?', a: 'Tùy gói; cộng vé lẻ định chơi rồi so sánh trước khi mua.'},
      {q: 'Combo gồm biển không?', a: 'Hỏi phân khu cụ thể gồm trong gói.'},
      {q: 'Trẻ em trong combo?', a: 'Hỏi tiêu chí tuổi/chiều cao và ngày áp dụng.'},
      {q: 'Mua ở đâu?', a: 'Qua đơn vị bán chính thức; cẩm nang không bán vé.'},
    ],
    related: ['tro-choi-dai-nam', 'gia-ve-dai-nam-2026', 'tickets', 'directions'],
  },

  // 15. Từ TP.HCM
  {
    slug: 'tu-tp-hcm-den-dai-nam',
    title: 'Từ TP.HCM đến Đại Nam – Lộ trình & lưu ý',
    h1: 'Từ TP.HCM đến Đại Nam – Cẩm nang',
    description: 'Khoảng cách, lộ trình và lưu ý từ TP.HCM đến Đại Nam: đường đi, thời gian ước tính và cách xác nhận trước đi.',
    eyebrow: 'Đường đi – Từ TP.HCM',
    intro: 'Đại Nam nằm ở phía Bắc TP.HCM, thuận tiện đi trong ngày từ trung tâm thành phố.',
    explore: 'Tuyến phổ biến là theo QL13/Đại lộ Bình Dương. Thời gian lái xe thay đổi theo giờ cao điểm; không hứa một con số cố định.',
    tips: 'Chuẩn bị bản đồ, xác nhận cổng nhận khách và điểm đỗ. Kiểm tra giờ cao điểm để tránh kẹt xe.',
    highlights: [
      {title: 'Lộ trình chính', body: 'Từ trung tâm TP.HCM theo QL13/Đại lộ Bình Dương đến địa chỉ tham chiếu.'},
      {title: 'Thời gian ước tính', body: 'Phụ thuộc giờ đi và giao thông; không cam kết một khoảng thời gian cố định.'},
      {title: 'Xác nhận cổng', body: 'Một địa chỉ chung không phải cổng duy nhất; hỏi cổng nhận khách trước.'},
    ],
    about: 'Trang này bổ sung trang Đường đi bằng lộ trình từ TP.HCM cụ thể hơn.',
    basic: 'Địa điểm: Khu du lịch Đại Nam, '+ADDRESS+'.',
    directions: 'Xem Đường đi để đối chiếu địa chỉ và xác nhận cổng, bãi đỗ.',
    discovery: 'Đi trong ngày từ TP.HCM rất phổ biến; kết hợp tham quan văn hóa, động vật và nghỉ ngơi.',
    route: [
      {title: 'Lên lộ trình', body: 'Dùng bản đồ xác định đường theo QL13/Đại lộ Bình Dương và tránh giờ cao điểm.'},
      {title: 'Xác nhận cổng', body: 'Hỏi cổng nhận khách và điểm trả khách trước khi xuất phát.'},
      {title: 'Chuẩn bị đỗ xe', body: 'Xem Bãi đỗ xe và điểm gửi xe khi đến.'},
    ],
    notes: 'Giờ cao điểm trên QL13 dễ kẹt; kiểm tra giao thông và thời tiết. Xác nhận cổng trước để không đi nhầm đường.',
    faq: [
      {q: 'Đi từ TP.HCM mất bao lâu?', a: 'Phụ thuộc giờ và giao thông; không cam kết thời gian cố định. Xem Đường đi.'},
      {q: 'Đường nào thuận tiện?', a: 'QL13/Đại lộ Bình Dương là tuyến phổ biến; đối chiếu bản đồ trước.'},
      {q: 'Có xa không?', a: 'Nằm phía Bắc TP.HCM, thuận tiện đi trong ngày.'},
      {q: 'Đỗ xe ở đâu?', a: 'Xem trang Bãi đỗ xe Đại Nam để xác nhận.'},
      {q: 'Có xe buýt không?', a: 'Xem trang Xe buýt đi Đại Nam để hướng dẫn tra cứu.'},
    ],
    related: ['directions', 'bai-do-xe-dai-nam', 'xe-buyt-di-dai-nam', 'ban-do-khu-du-lich-dai-nam'],
  },

  // 16. Xe buýt
  {
    slug: 'xe-buyt-di-dai-nam',
    title: 'Xe buýt đi Đại Nam – Cách tra cứu & lưu ý',
    h1: 'Xe buýt đi Đại Nam – Cẩm nang',
    description: 'Cách tra cứu xe buýt đi Đại Nam, tên trạm và đoạn đường còn lại tới cổng. Không xác nhận một tuyến cụ thể.',
    eyebrow: 'Đường đi – Xe buýt',
    intro: 'Xe buýt là lựa chọn tiết kiệm, nhưng tuyến và trạm thay đổi theo nhà vận tải và ngày đi.',
    explore: 'Thay vì cam kết một tuyến, trang này hướng dẫn cách tra cứu nhà xe đang phục vụ, tên trạm, chiều đi và đoạn đường còn lại.',
    tips: 'Tra cứu trước ngày đi: nhà xe, trạm gần nhất, chuyến cuối và khoảng cách từ trạm tới cổng. Hỏi lại khi đến.',
    highlights: [
      {title: 'Tra cứu nhà xe', body: 'Kiểm tra đơn vị đang phục vụ tuyến tới khu vực Đại Nam vào ngày đi.'},
      {title: 'Tên trạm & chiều đi', body: 'Xác nhận trạm dừng, hướng đi và chuyến cuối để không đi nhầm.'},
      {title: 'Đoạn còn lại', body: 'Từ trạm tới cổng có thể cần đi bộ hoặc xe tiếp; hỏi người địa phương khi đến.'},
    ],
    about: 'Trang này bổ sung trang Đường đi bằng hướng dẫn xe buýt cụ thể, không bịa tuyến.',
    basic: 'Địa điểm đến: Khu du lịch Đại Nam, '+ADDRESS+'.',
    directions: 'Xem Đường đi để đối chiếu địa chỉ và cổng.',
    notes: 'Lịch xe buýt thay đổi; không dựa vào thông tin cũ. Xác nhận lại gần ngày đi và khi đến nơi.',
    faq: [
      {q: 'Có tuyến xe buýt nào đi Đại Nam?', a: 'Tuyến thay đổi theo nhà vận tải; tra cứu đơn vị phục vụ ngày đi, không xác nhận một tuyến cụ thể.'},
      {q: 'Xuống trạm nào?', a: 'Xác nhận trạm gần nhất và hướng đi trước khi lên xe.'},
      {q: 'Từ trạm tới cổng bao xa?', a: 'Có thể cần đi bộ hoặc xe tiếp; hỏi khi đến.'},
      {q: 'Chuyến cuối mấy giờ?', a: 'Tra cứu lịch nhà xe ngày đi; không cam kết giờ cố định.'},
      {q: 'Có an toàn không?', a: 'Bình thường; giữ tư trang và xác nhận tuyến với người địa phương.'},
    ],
    related: ['directions', 'tu-tp-hcm-den-dai-nam', 'bai-do-xe-dai-nam'],
  },

  // 17. Bãi đỗ xe
  {
    slug: 'bai-do-xe-dai-nam',
    title: 'Bãi đỗ xe Đại Nam – Chỗ, giá & lưu ý',
    h1: 'Bãi đỗ xe Đại Nam – Cẩm nang',
    description: 'Thông tin bãi đỗ xe Đại Nam: chỗ đỗ, giá gửi xe và cách xác minh trước khi đi. Không cam kết số chỗ hay giá.',
    eyebrow: 'Đường đi – Đỗ xe',
    intro: 'Nếu đi xe cá nhân, bãi đỗ là bước cần xác nhận trước để tránh bỡ ngỡ khi đến.',
    explore: 'Trang này hướng dẫn xác minh chỗ đỗ, điều kiện gửi xe và điểm trả khách thay vì đưa số chỗ hay giá chưa kiểm chứng.',
    tips: 'Hỏi đơn vị vận hành: khu vực đỗ, giá gửi xe, giờ mở và điểm trả khách. Chuẩn bị sẵn phương án thay thế.',
    highlights: [
      {title: 'Chỗ đỗ', body: 'Chưa xác minh số chỗ; hỏi khu vực đỗ xe khi đến hoặc trước qua đơn vị vận hành.'},
      {title: 'Giá gửi xe', body: 'Chưa xác minh; xác nhận giá và điều kiện gửi xe ngày đi.'},
      {title: 'Điểm trả khách', body: 'Xác nhận cổng nhận khách và điểm đỗ gần nhất để thuận tiện.'},
    ],
    about: 'Trang này bổ sung trang Đường đi bằng thông tin đỗ xe cần xác minh.',
    basic: 'Địa điểm: Khu du lịch Đại Nam, '+ADDRESS+'.',
    directions: 'Xem Đường đi để xác nhận cổng và bãi đỗ.',
    notes: 'Ngày lễ hoặc cuối tuần chỗ đỗ dễ đầy; đến sớm và xác nhận trước. Giữ vé gửi xe cẩn thận.',
    faq: [
      {q: 'Có bãi đỗ xe không?', a: 'Có khu vực đỗ xe; chưa xác minh số chỗ, hỏi đơn vị vận hành trước.'},
      {q: 'Giá gửi xe bao nhiêu?', a: 'Chưa xác minh; xác nhận giá và điều kiện ngày đi.'},
      {q: 'Xe máy có đỗ được không?', a: 'Hỏi điều kiện từng loại xe với đơn vị vận hành.'},
      {q: 'Đỗ gần cổng nào?', a: 'Xác nhận cổng nhận khách và bãi đỗ gần nhất.'},
      {q: 'Ngày lễ có đông không?', a: 'Dễ đầy; đến sớm và có phương án thay thế.'},
    ],
    related: ['directions', 'tu-tp-hcm-den-dai-nam', 'xe-buyt-di-dai-nam', 'ban-do-khu-du-lich-dai-nam'],
  },

  // 18. Lịch mở cửa ngày lễ
  {
    slug: 'lich-mo-cua-ngay-le-dai-nam',
    title: 'Lịch mở cửa ngày lễ Đại Nam – Cách xác minh',
    h1: 'Lịch mở cửa ngày lễ Đại Nam – Cẩm nang',
    description: 'Đại Nam có mở cửa ngày lễ không, giờ có khác không và cách xác minh theo từng phân khu. Xem trước khi đi.',
    eyebrow: 'Giờ mở cửa – Ngày lễ',
    intro: 'Ngày lễ thường là thời điểm đi chơi, nhưng giờ từng phân khu có thể khác ngày thường và không cố định.',
    explore: 'Thay vì đưa một lịch lễ cố định, trang này hướng dẫn xác minh giờ từng phân khu và nguồn đối chiếu vào ngày lễ.',
    tips: 'Trước ngày lễ, hỏi đơn vị vận hành giờ từng phân khu, vé và điều kiện. Đừng giả định giờ cổng áp dụng cho mọi khu.',
    highlights: [
      {title: 'Giờ lễ có thể khác', body: 'Ngày lễ có thể mở cửa hoặc đóng khác ngày thường; xác nhận từng phân khu.'},
      {title: 'Nguồn đối chiếu', body: 'Dùng thông báo chính thức của đơn vị vận hành gần ngày đi, không dùng lịch cũ.'},
      {title: 'Kế hoạch dự phòng', body: 'Chuẩn bị phân khu thay thế nếu khu bạn muốn đóng.'},
    ],
    about: 'Trang này bổ sung trang Giờ mở cửa bằng hướng dẫn ngày lễ cần xác minh.',
    basic: 'Địa điểm: Khu du lịch Đại Nam, '+ADDRESS+'.',
    hours: 'Chưa xác minh lịch ngày lễ có ngày áp dụng. Xem Giờ mở cửa và hỏi đơn vị vận hành theo từng phân khu gần ngày đi.',
    tickets: 'Xem Vé và chi phí; ngày lễ có thể có điều kiện vé riêng, xác nhận trước.',
    directions: 'Xem Đường đi để xác nhận cổng và bãi đỗ ngày lễ.',
    faq: [
      {q: 'Đại Nam mở cửa ngày lễ không?', a: 'Chưa xác minh cố định; hỏi đơn vị vận hành giờ từng phân khu gần ngày đi.'},
      {q: 'Giờ ngày lễ khác không?', a: 'Có thể; xác nhận từng phân khu, không giả định giờ cổng chung.'},
      {q: 'Có đông không?', a: 'Ngày lễ thường đông; đến sớm và chuẩn bị chỗ đỗ.'},
      {q: 'Nên xác minh ở đâu?', a: 'Thông báo chính thức của đơn vị vận hành gần ngày đi.'},
      {q: 'Phân khu nào mở?', a: 'Hỏi đơn vị vận hành; chuẩn bị phương án thay thế.'},
    ],
    related: ['hours', 'ban-do-khu-du-lich-dai-nam', 'directions', 'gia-ve-dai-nam-2026'],
  },

  // 19. Lịch trình nửa ngày
  {
    slug: 'lich-trinh-dai-nam-nua-ngay',
    title: 'Lịch trình Đại Nam nửa ngày – Gợi ý tham quan',
    h1: 'Lịch trình Đại Nam nửa ngày – Gợi ý',
    description: 'Gợi ý lịch trình nửa ngày tại Đại Nam: văn hóa, động vật hoặc nước, tùy thời gian và ngày đi. Xem trước khi lên kế hoạch.',
    eyebrow: 'Lịch trình – Nửa ngày',
    intro: 'Nếu chỉ có vài giờ, chọn một cụm chủ đề thay vì chạy nhiều nơi. Thứ tự dưới đây là gợi ý, không phải lịch đã xác minh.',
    explore: 'Nửa ngày phù hợp nhóm muốn nhẹ nhàng: sáng văn hóa, hoặc chiều biển/trò chơi. Tập trung vào 1–2 phân khu.',
    tips: 'Chọn cụm: văn hóa (Kim Điện, quảng trường) hoặc động vật/nước. Kiểm tra giờ từng khu và thời tiết trước.',
    highlights: [
      {title: 'Cụm văn hóa', body: 'Kim Điện, quảng trường và kiến trúc; phù hợp buổi sáng mát.'},
      {title: 'Cụm động vật', body: 'Vườn thú hoặc nông trại; đi bộ nhẹ, hợp gia đình.'},
      {title: 'Cụm nước', body: 'Biển nhân tạo hoặc trò chơi; hợp chiều, nhưng kiểm tra thời tiết.'},
    ],
    about: 'Trang này giúp lập kế hoạch khi thời gian hạn chế; không thay thế bản đồ chính thức tại cổng.',
    basic: 'Địa điểm: Khu du lịch Đại Nam, '+ADDRESS+'.',
    route: [
      {title: 'Chọn cụm chủ đề', body: 'Quyết định văn hóa, động vật hay nước trước khi đến.'},
      {title: 'Vào và định hướng', body: 'Lấy bản đồ tại cổng, xác nhận khu mở.'},
      {title: 'Tham quan và nghỉ', body: 'Hoàn thành cụm đã chọn rồi ra về; đừng ôm đồm.'},
    ],
    notes: 'Giờ từng phân khu chưa cố định; xác nhận trước. Nửa ngày nên ưu tiên một cụm để không vội.',
    faq: [
      {q: 'Nửa ngày đi được mấy chỗ?', a: 'Nên 1–2 phân khu; đừng ôm đồm nhiều nơi.'},
      {q: 'Nên bắt đầu từ đâu?', a: 'Tùy cụm: văn hóa buổi sáng, nước buổi chiều.'},
      {q: 'Có đủ thời gian chơi biển?', a: 'Có nếu chỉ tập trung biển; kiểm tra thời tiết và giờ.'},
      {q: 'Kết hợp được trẻ em không?', a: 'Được với cụm động vật nhẹ; xem trang Gia đình.'},
      {q: 'Cần bản đồ không?', a: 'Có; nhận tại cổng và đối chiếu kế hoạch.'},
    ],
    related: ['ban-do-khu-du-lich-dai-nam', 'kim-dien-dai-nam', 'vuon-thu-dai-nam', 'bien-nhan-tao-dai-nam', 'dai-nam-cho-gia-dinh'],
  },

  // 20. Lịch trình 1 ngày
  {
    slug: 'lich-trinh-dai-nam-1-ngay',
    title: 'Lịch trình Đại Nam 1 ngày – Gợi ý chi tiết',
    h1: 'Lịch trình Đại Nam 1 ngày – Gợi ý',
    description: 'Gợi ý lịch trình 1 ngày tại Đại Nam: văn hóa, động vật, nước và nghỉ ngơi. Thứ tự là đề xuất, không phải lịch xác minh.',
    eyebrow: 'Lịch trình – 1 ngày',
    intro: 'Một ngày đủ để kết hợp văn hóa, động vật và giải trí nếu lên kế hoạch hợp lý. Thứ tự dưới đây chỉ là gợi ý.',
    explore: 'Sáng văn hóa, trưa nghỉ, chiều động vật hoặc nước. Điều chỉnh theo giờ từng phân khu và thời tiết thực tế.',
    tips: 'Lên lịch theo cụm, nghỉ trưa, mang nước và mũ. Xác nhận giờ từng khu trước khi đi.',
    highlights: [
      {title: 'Sáng: văn hóa', body: 'Kim Điện, quảng trường; mát và ít bước đi.'},
      {title: 'Trưa: nghỉ & ăn', body: 'Sắp xếp nghỉ, uống nước và ăn nhẹ trong khu.'},
      {title: 'Chiều: động vật/nước', body: 'Chọn vườn thú hoặc biển/trò chơi theo thời tiết.'},
    ],
    about: 'Trang này gợi ý trình tự tham quan; không xác nhận giờ hay lịch trình thực tế của khu.',
    basic: 'Địa điểm: Khu du lịch Đại Nam, '+ADDRESS+'.',
    route: [
      {title: 'Sáng văn hóa', body: 'Bắt đầu từ Kim Điện và quảng trường khi mát.'},
      {title: 'Trưa nghỉ', body: 'Nghỉ, ăn nhẹ và nạp nước.'},
      {title: 'Chiều động vật hoặc nước', body: 'Chọn vườn thú hoặc biển/trò chơi theo thời tiết và vé.'},
      {title: 'Ra về', body: 'Xác nhận phương tiện và giờ trước khi rời.'},
    ],
    notes: 'Giờ từng phân khu chưa cố định; thứ tự linh hoạt. Kiểm tra thời tiết với hoạt động nước.',
    faq: [
      {q: '1 ngày có đủ không?', a: 'Đủ nếu lên kế hoạch theo cụm; không nên ôm đồm.'},
      {q: 'Nên đi thứ tự nào?', a: 'Sáng văn hóa, chiều động vật/nước; điều chỉnh theo giờ và thời tiết.'},
      {q: 'Ăn trưa ở đâu?', a: 'Hỏi khu vực ăn uống trong khu khi đến.'},
      {q: 'Có kịp chơi biển?', a: 'Có nếu ưu tiên chiều nước; kiểm tra thời tiết.'},
      {q: 'Gia đình có hợp không?', a: 'Hợp; xem trang Gia đình và Trẻ em.'},
    ],
    related: ['ban-do-khu-du-lich-dai-nam', 'kim-dien-dai-nam', 'vuon-thu-dai-nam', 'bien-nhan-tao-dai-nam', 'dai-nam-cho-gia-dinh', 'dai-nam-ngay-mua'],
  },

  // 21. Gia đình
  {
    slug: 'dai-nam-cho-gia-dinh',
    title: 'Đại Nam cho gia đình – Lịch trình & lưu ý',
    h1: 'Đại Nam cho gia đình – Cẩm nang',
    description: 'Đại Nam có hợp cho gia đình không, nên đi đâu với trẻ em và lưu ý an toàn. Xem trước khi lên kế hoạch.',
    eyebrow: 'Lịch trình – Gia đình',
    intro: 'Với gia đình có trẻ nhỏ, Đại Nam có thể là ngày cuối tuần nhẹ nhàng nếu chọn đúng phân khu.',
    explore: 'Ưu tiên vườn thú, nông trại và trò chơi trẻ em; hạn chế mạo hiểm trên cao với bé.',
    tips: 'Mang mũ, nước, đồ bơi cho bé, thuốc cơ bản. Giám sát sát sao và nghỉ giữa các trò.',
    highlights: [
      {title: 'Phân khu hợp bé', body: 'Vườn thú, nông trại, trò chơi trẻ em; đi bộ nhẹ.'},
      {title: 'An toàn', body: 'Giám sát mọi lúc, tuân thủ giới hạn chiều cao/tuổi.'},
      {title: 'Nghỉ & tiếp nước', body: 'Sắp xếp nghỉ trưa, tránh nắng gắt.'},
    ],
    about: 'Trang này tập trung gia đình; không xác nhận dịch vụ cụ thể, chỉ gợi ý chọn lọc.',
    basic: 'Địa điểm: Khu du lịch Đại Nam, '+ADDRESS+'.',
    route: [
      {title: 'Chọn cụm gia đình', body: 'Vườn thú + trò chơi trẻ em hoặc nông trại.'},
      {title: 'Giám sát & nghỉ', body: 'Đi chậm, nghỉ và tiếp nước thường.'},
      {title: 'Chuẩn bị bé', body: 'Mũ, nước, đồ bơi, thuốc cơ bản.'},
    ],
    notes: 'Trẻ em cần giám sát sát; không ép chơi trò vượt mức. Kiểm tra thời tiết với bé.',
    faq: [
      {q: 'Đại Nam có hợp trẻ em không?', a: 'Có với vườn thú, nông trại và trò chơi trẻ em.'},
      {q: 'Cần chuẩn bị gì?', a: 'Mũ, nước, đồ bơi, thuốc cơ bản và giám sát sát.'},
      {q: 'Có nguy hiểm không?', a: 'An toàn nếu tuân thủ giới hạn và giám sát.'},
      {q: 'Đi mấy tiếng?', a: 'Nửa đến 1 ngày tùy cụm chọn.'},
      {q: 'Mưa có sao không?', a: 'Xem trang Ngày mưa để kế hoạch dự phòng.'},
    ],
    related: ['vuon-thu-dai-nam', 'tro-choi-tre-em', 'kinh-nghiem-dai-nam-cho-tre-em', 'dai-nam-ngay-mua', 'nong-trai-cang-cua'],
  },

  // 22. Kinh nghiệm trẻ em
  {
    slug: 'kinh-nghiem-dai-nam-cho-tre-em',
    title: 'Kinh nghiệm Đại Nam cho trẻ em – Cẩm nang',
    h1: 'Kinh nghiệm Đại Nam cho trẻ em – Cẩm nang',
    description: 'Kinh nghiệm đưa trẻ em đi Đại Nam: chuẩn bị, phân khu hợp lý và lưu ý an toàn. Xem trước khi đi.',
    eyebrow: 'Lịch trình – Trẻ em',
    intro: 'Đi Đại Nam với trẻ em dễ hơn nếu biết chọn phân khu và chuẩn bị trước.',
    explore: 'Vườn thú và trò chơi trẻ em là điểm bé thích; tránh mạo hiểm trên cao và nắng gắt.',
    tips: 'Chuẩn bị đồ bơi, mũ, nước, đồ ăn nhẹ và thuốc. Giám sát sát và nghỉ thường.',
    highlights: [
      {title: 'Phân khu bé thích', body: 'Vườn thú, nông trại, trò chơi trẻ em.'},
      {title: 'Chuẩn bị', body: 'Đồ bơi, mũ, nước, đồ ăn nhẹ, thuốc cơ bản.'},
      {title: 'An toàn', body: 'Giám sát, tuân thủ giới hạn chiều cao/tuổi.'},
    ],
    about: 'Trang này chia sẻ kinh nghiệm thực tế cho phụ huynh; không xác nhận dịch vụ.',
    basic: 'Địa điểm: Khu du lịch Đại Nam, '+ADDRESS+'.',
    route: [
      {title: 'Chọn điểm', body: 'Ưu tiên vườn thú và trò chơi trẻ em.'},
      {title: 'Chuẩn bị', body: 'Đồ bơi, mũ, nước, đồ ăn, thuốc.'},
      {title: 'Giám sát', body: 'Đi chậm, nghỉ và theo dõi bé.'},
    ],
    notes: 'Không ép bé chơi trò vượt mức; nghỉ tránh nắng. Kiểm tra thời tiết.',
    faq: [
      {q: 'Bao nhiêu tuổi đi được?', a: 'Tùy trò; hỏi giới hạn chiều cao/tuổi tại chỗ.'},
      {q: 'Cần đồ gì?', a: 'Đồ bơi, mũ, nước, đồ ăn nhẹ, thuốc.'},
      {q: 'An toàn thế nào?', a: 'Giám sát sát và tuân thủ biển báo.'},
      {q: 'Cho ăn động vật được không?', a: 'Không; giữ khoảng cách và không vượt rào.'},
      {q: 'Mệt thì nghỉ đâu?', a: 'Khu vực bóng râm và nghỉ trong khu.'},
    ],
    related: ['tro-choi-tre-em', 'vuon-thu-dai-nam', 'dai-nam-cho-gia-dinh', 'dai-nam-ngay-mua'],
  },

  // 23. Cặp đôi
  {
    slug: 'dai-nam-cho-cap-doi',
    title: 'Đại Nam cho cặp đôi – Lịch trình & gợi ý',
    h1: 'Đại Nam cho cặp đôi – Cẩm nang',
    description: 'Đại Nam có hợp cho cặp đôi không, nên đi đâu và chụp ảnh ở đâu. Xem trước khi lên kế hoạch.',
    eyebrow: 'Lịch trình – Cặp đôi',
    intro: 'Cặp đôi có thể kết hợp kiến trúc, cảnh nước và chụp ảnh nhẹ nhàng.',
    explore: 'Kim Điện và quảng trường hợp ảnh kiến trúc; biển nhân tạo hợp chiều mát. Tránh ngày quá đông.',
    tips: 'Đi ngày thường, mang máy ảnh, nghỉ và chụp ở góc cho phép. Xác nhận giờ khu trước.',
    highlights: [
      {title: 'Kiến trúc & ảnh', body: 'Kim Điện, công trình rồng vàng, quảng trường.'},
      {title: 'Cảnh nước', body: 'Biển nhân tạo chiều mát; hợp đi dạo.'},
      {title: 'Ít đông', body: 'Ưu tiên ngày thường để thoải mái.'},
    ],
    about: 'Trang này gợi ý lịch trình cặp đôi; không xác nhận dịch vụ cụ thể.',
    basic: 'Địa điểm: Khu du lịch Đại Nam, '+ADDRESS+'.',
    route: [
      {title: 'Kiến trúc', body: 'Kim Điện và quảng trường buổi sáng mát.'},
      {title: 'Cảnh nước', body: 'Biển nhân tạo hoặc dạo quanh chiều.'},
      {title: 'Chụp ảnh', body: 'Xem trang Địa điểm chụp ảnh.'},
    ],
    notes: 'Tôn trọng không gian tôn nghiêm tại Kim Điện; chụp ở nơi cho phép.',
    faq: [
      {q: 'Đại Nam có lãng mạn không?', a: 'Có với kiến trúc và cảnh nước nhẹ nhàng.'},
      {q: 'Chụp ảnh ở đâu?', a: 'Kim Điện, quảng trường, biển; xem trang chụp ảnh.'},
      {q: 'Nên đi ngày nào?', a: 'Ngày thường để tránh đông.'},
      {q: 'Có tốn nhiều không?', a: 'Xác nhận vé ngày đi; xem Vé Đại Nam 2026.'},
      {q: 'Đi mấy tiếng?', a: 'Nửa đến 1 ngày tùy lịch trình.'},
    ],
    related: ['kim-dien-dai-nam', 'bien-nhan-tao-dai-nam', 'ban-do-khu-du-lich-dai-nam', 'dia-diem-chup-anh-dai-nam'],
  },

  // 24. Ngày mưa
  {
    slug: 'dai-nam-ngay-mua',
    title: 'Đại Nam ngày mưa – Có nên đi & lưu ý',
    h1: 'Đại Nam ngày mưa – Cẩm nang',
    description: 'Đại Nam có nên đi ngày mưa không, hoạt động nào bị ảnh hưởng và kế hoạch dự phòng. Xem trước khi đi.',
    eyebrow: 'Lịch trình – Ngày mưa',
    intro: 'Mưa ảnh hưởng hoạt động ngoài trời, nhất là biển và trò chơi nước. Cần kế hoạch linh hoạt.',
    explore: 'Ngày mưa nên ưu tiên phân khu có mái/mái che và kiến trúc; tránh hoạt động nước khi giông.',
    tips: 'Xem dự báo, mang áo mưa, ưu tiên Kim Điện và quảng trường. Hoãn biển/trò chơi nước nếu giông.',
    highlights: [
      {title: 'Ưu tiên trong nhà/mái', body: 'Kim Điện, không gian kiến trúc; hạn chế ngoài trời.'},
      {title: 'Hoãn nước', body: 'Biển và trò chơi nước dễ hoãn khi mưa/giông.'},
      {title: 'Dự báo', body: 'Kiểm tra dự báo và cảnh báo trước khi đi.'},
    ],
    about: 'Trang này hướng dẫn ngày mưa; không xác nhận lịch hoạt động cụ thể.',
    basic: 'Địa điểm: Khu du lịch Đại Nam, '+ADDRESS+'.',
    route: [
      {title: 'Kiểm tra dự báo', body: 'Xem dự báo và cảnh báo chính thức trước đi.'},
      {title: 'Chọn phân khu', body: 'Ưu tiên kiến trúc/mái che; hoãn nước.'},
      {title: 'Linh hoạt', body: 'Sẵn sàng rút ngắn hoặc đổi kế hoạch.'},
    ],
    notes: 'An toàn khi giông: tránh cây, khu cao và nước. Tuân thủ hướng dẫn tại chỗ.',
    faq: [
      {q: 'Mưa có nên đi không?', a: 'Được nếu ưu tiên kiến trúc; hoãn hoạt động nước.'},
      {q: 'Biển có mở khi mưa?', a: 'Dễ hoãn; xác nhận với đơn vị vận hành.'},
      {q: 'Cần mang gì?', a: 'Áo mưa, giày chống trượt, túi chống nước.'},
      {q: 'Có chỗ trú không?', a: 'Khu vực kiến trúc/mái che; hỏi bản đồ tại cổng.'},
      {q: 'Xem dự báo ở đâu?', a: 'Trang Đường đi có liên kết dự báo chính thức.'},
    ],
    related: ['kim-dien-dai-nam', 'ban-do-khu-du-lich-dai-nam', 'directions', 'dai-nam-cho-gia-dinh'],
  },

  // 25. Địa điểm chụp ảnh
  {
    slug: 'dia-diem-chup-anh-dai-nam',
    title: 'Địa điểm chụp ảnh Đại Nam – Góc & lưu ý',
    h1: 'Địa điểm chụp ảnh Đại Nam – Cẩm nang',
    description: 'Các góc chụp ảnh tại Đại Nam: kiến trúc, cảnh nước và quảng trường. Chụp ở đâu được phép và lưu ý.',
    eyebrow: 'Lịch trình – Chụp ảnh',
    intro: 'Đại Nam có nhiều góc kiến trúc và cảnh nước phù hợp ảnh, nếu biết chọn và tôn trọng quy định.',
    explore: 'Kim Điện, công trình rồng vàng và quảng trường là góc kiến trúc; biển nhân tạo hợp ảnh chiều.',
    tips: 'Chụp nơi cho phép, tránh khu vực hạn chế và hành lễ. Sáng sớm/chiều mát ánh sáng thuận.',
    highlights: [
      {title: 'Kiến trúc', body: 'Kim Điện, rồng vàng, quảng trường trung tâm.'},
      {title: 'Cảnh nước', body: 'Biển nhân tạo lúc chiều mát.'},
      {title: 'Quy định', body: 'Chụp ở nơi cho phép; tôn trọng không gian tôn nghiêm.'},
    ],
    about: 'Trang này gợi ý góc chụp; không xác nhận mọi khu mở cửa cho ảnh.',
    basic: 'Địa điểm: Khu du lịch Đại Nam, '+ADDRESS+'.',
    photos: [
      {src: '/images/dai-nam-cong-rong-vang.jpg', alt: 'Công trình rồng vàng tại Đại Nam', credit: 'Liftold · Wikimedia Commons · CC BY-SA 3.0'},
      {src: '/images/dai-nam-quang-truong.jpg', alt: 'Quảng trường trung tâm Khu du lịch Đại Nam', credit: 'Xuanphuocle · Wikimedia Commons · CC0'},
    ],
    route: [
      {title: 'Sáng kiến trúc', body: 'Kim Điện và rồng vàng khi sáng mát.'},
      {title: 'Chiều cảnh nước', body: 'Biển nhân tạo lúc chiều.'},
      {title: 'Tôn trọng quy định', body: 'Chụp ở nơi cho phép, tránh khu hạn chế.'},
    ],
    notes: 'Tại Kim Điện giữ yên lặng và không chụp nơi hành lễ. Tuân thủ biển báo.',
    faq: [
      {q: 'Chụp ảnh ở đâu đẹp?', a: 'Kim Điện, rồng vàng, quảng trường, biển chiều.'},
      {q: 'Có bị cấm chụp không?', a: 'Chụp ở nơi cho phép; tránh khu hạn chế và hành lễ.'},
      {q: 'Giờ nào ánh sáng tốt?', a: 'Sáng sớm hoặc chiều mát.'},
      {q: 'Chụp cưới có được không?', a: 'Hỏi đơn vị vận hành về điều kiện.'},
      {q: 'Có ảnh mẫu không?', a: 'Xem ảnh thực tế trên trang chủ và các phân khu.'},
    ],
    related: ['kim-dien-dai-nam', 'bien-nhan-tao-dai-nam', 'ban-do-khu-du-lich-dai-nam', 'dai-nam-cho-cap-doi'],
  },

  // 26. Nhà hàng gần Đại Nam
  {
    slug: 'nha-hang-gan-dai-nam',
    title: 'Nhà hàng gần Đại Nam – Cách tìm & chọn',
    h1: 'Nhà hàng gần Đại Nam – Cẩm nang',
    description: 'Cách tìm nhà hàng gần Đại Nam: dùng bản đồ, đọc đánh giá và xác minh trước khi đi. Hướng dẫn không liệt kê cửa hàng cụ thể.',
    eyebrow: 'Xung quanh – Ăn uống',
    intro: 'Xung quanh Khu du lịch Đại Nam có các quán ăn, nhà hàng địa phương. Trang này hướng dẫn tự tìm và xác minh thay vì đưa danh sách cố định.',
    explore: 'Khu vực quanh Đại Nam và dọc QL13 có nhiều lựa chọn từ quán bình dân đến nhà hàng. Quan trọng là chọn nơi có đánh giá thực tế và gần lộ trình.',
    tips: 'Dùng bản đồ tìm "nhà hàng gần Khu du lịch Đại Nam", lọc theo đánh giá và khoảng cách. Xác nhận giờ mở cửa và giá trước khi đến.',
    highlights: [
      {title: 'Tìm trên bản đồ', body: 'Dùng ứng dụng bản đồ với từ khóa vùng Đại Nam/QL13; xem khoảng cách và giờ.'},
      {title: 'Đọc đánh giá', body: 'Ưu tiên nơi có nhận xét gần đây, nhiều và thực tế.'},
      {title: 'Xác minh trước', body: 'Gọi hoặc kiểm tra giờ mở cửa, giá và chỗ đỗ trước khi đi.'},
    ],
    about: 'Trang này là hướng dẫn tìm kiếm, không xác nhận bất kỳ nhà hàng cụ thể nào.',
    basic: 'Khu vực tham chiếu: xung quanh Khu du lịch Đại Nam, '+ADDRESS+'.',
    directions: 'Xem Đường đi để xác nhận lộ trình và điểm dừng ăn uống.',
    notes: 'Giờ và giá thay đổi; không dựa vào thông tin cũ. Xác nhận lại gần ngày đi.',
    faq: [
      {q: 'Có nhà hàng nào gần Đại Nam?', a: 'Có nhiều quán địa phương; dùng bản đồ tìm và đọc đánh giá thay vì một danh sách cố định.'},
      {q: 'Nên chọn thế nào?', a: 'Ưu tiên đánh giá thực tế gần đây, gần lộ trình và có chỗ đỗ.'},
      {q: 'Giá bao nhiêu?', a: 'Thay đổi; xác nhận thực đơn và giá trước khi gọi món.'},
      {q: 'Có phù hợp gia đình không?', a: 'Nhiều nơi phục vụ gia đình; xem đánh giá và menu.'},
      {q: 'Đỗ xe ở đâu?', a: 'Hỏi chỗ đỗ của quán; xem Bãi đỗ xe Đại Nam nếu ăn gần khu.'},
    ],
    related: ['an-uong-trong-dai-nam', 'mon-ngon-gan-dai-nam', 'quan-ca-phe-gan-dai-nam', 'directions'],
  },

  // 27. Món ngon gần Đại Nam
  {
    slug: 'mon-ngon-gan-dai-nam',
    title: 'Món ngon gần Đại Nam – Cách tìm ẩm thực địa phương',
    h1: 'Món ngon gần Đại Nam – Cẩm nang',
    description: 'Cách tìm món ngon và ẩm thực địa phương gần Đại Nam: từ khóa tìm kiếm, chợ và quán. Hướng dẫn không bịa quán cụ thể.',
    eyebrow: 'Xung quanh – Ẩm thực',
    intro: 'Khu vực Bình Dương quanh Đại Nam có ẩm thực miền Nam và địa phương. Trang này hướng dẫn tự khám phá thay vì đưa tên quán cố định.',
    explore: 'Tìm theo món (bánh canh, bún bò, hủ tiếu, gà nướng...) kết hợp tên vùng. Chợ và tuyến đường địa phương thường có quán lâu năm.',
    tips: 'Dùng bản đồ với tên món + "gần Đại Nam"; ưu tiên quán có đông khách địa phương và đánh giá nhất quán.',
    highlights: [
      {title: 'Tìm theo món', body: 'Kết hợp tên món phổ biến với vùng Đại Nam/QL13 để lọc quán.'},
      {title: 'Chợ địa phương', body: 'Chợ và tuyến đường gần khu có quán ăn truyền thống.'},
      {title: 'Xác minh', body: 'Kiểm tra giờ, giá và vệ sinh trước khi dùng.'},
    ],
    about: 'Hướng dẫn khám phá ẩm thực, không xác nhận quán cụ thể.',
    basic: 'Vùng tham chiếu: quanh Khu du lịch Đại Nam, '+ADDRESS+'.',
    directions: 'Xem Đường đi để ghép điểm ăn vào lộ trình.',
    notes: 'Vệ sinh và giá thay đổi; ưu tiên nơi đông khách và sạch sẽ.',
    faq: [
      {q: 'Có món gì đặc sản?', a: 'Ẩm thực miền Nam và địa phương; tìm theo tên món + vùng để khám phá.'},
      {q: 'Quán nào ngon?', a: 'Dùng bản đồ và đánh giá; không có một danh sách cố định.'},
      {q: 'Có chợ gần không?', a: 'Có chợ địa phương; hỏi người dân hoặc bản đồ khi đến.'},
      {q: 'An toàn vệ sinh không?', a: 'Ưu tiên nơi đông khách, sạch sẽ; quan sát trước khi chọn.'},
      {q: 'Kết hợp lộ trình sao?', a: 'Xem Đường đi và Nhà hàng gần Đại Nam.'},
    ],
    related: ['nha-hang-gan-dai-nam', 'an-uong-trong-dai-nam', 'directions'],
  },

  // 28. Quán cà phê gần Đại Nam
  {
    slug: 'quan-ca-phe-gan-dai-nam',
    title: 'Quán cà phê gần Đại Nam – Cách tìm & chọn',
    h1: 'Quán cà phê gần Đại Nam – Cẩm nang',
    description: 'Cách tìm quán cà phê gần Đại Nam: bản đồ, không gian và xác minh. Hướng dẫn không liệt kê quán cụ thể.',
    eyebrow: 'Xung quanh – Cà phê',
    intro: 'Văn hóa cà phê Việt Nam rất phổ biến quanh Bình Dương. Trang này hướng dẫn tự tìm quán phù hợp thay vì danh sách cố định.',
    explore: 'Từ cà phê vỉa hè đến không gian rộng, nhiều lựa chọn dọc QL13 và khu dân cư. Chọn theo nhu cầu nghỉ ngơi hay làm việc.',
    tips: 'Dùng bản đồ tìm "cà phê gần Đại Nam"; xem ảnh không gian, giờ và đánh giá. Xác nhận trước khi đến.',
    highlights: [
      {title: 'Tìm trên bản đồ', body: 'Lọc theo khoảng cách, giờ mở và ảnh thực tế.'},
      {title: 'Chọn không gian', body: 'Vỉa hè nhanh gọn, không gian rộng hợp nhóm lớn.'},
      {title: 'Xác minh', body: 'Kiểm tra giờ và chỗ đỗ trước khi đi.'},
    ],
    about: 'Hướng dẫn tìm kiếm, không xác nhận quán cụ thể.',
    basic: 'Vùng tham chiếu: quanh Khu du lịch Đại Nam, '+ADDRESS+'.',
    directions: 'Xem Đường đi để ghép điểm cà phê vào lộ trình.',
    notes: 'Giờ và chất lượng thay đổi; ưu tiên đánh giá gần đây.',
    faq: [
      {q: 'Có quán cà phê nào?', a: 'Nhiều lựa chọn dọc QL13; tìm trên bản đồ và đọc đánh giá.'},
      {q: 'Chỗ nào rộng cho nhóm?', a: 'Lọc không gian rộng trên bản đồ; xem ảnh và nhận xét.'},
      {q: 'Mở sớm không?', a: 'Tùy quán; xác nhận giờ trên bản đồ trước.'},
      {q: 'Có chỗ đỗ xe?', a: 'Hỏi từng quán; xem Bãi đỗ xe Đại Nam nếu gần.'},
      {q: 'Giá thế nào?', a: 'Thay đổi; xem thực đơn hoặc hỏi trước.'},
    ],
    related: ['nha-hang-gan-dai-nam', 'mon-ngon-gan-dai-nam', 'directions'],
  },

  // 29. Ăn uống trong Đại Nam
  {
    slug: 'an-uong-trong-dai-nam',
    title: 'Ăn uống trong Đại Nam – Khu vực & lưu ý',
    h1: 'Ăn uống trong Đại Nam – Cẩm nang',
    description: 'Ăn uống trong Khu du lịch Đại Nam: khu vực phục vụ, cách xác minh thực đơn và lưu ý giá. Hướng dẫn không bịa quán cụ thể.',
    eyebrow: 'Trong khu – Ăn uống',
    intro: 'Khu du lịch Đại Nam có các điểm phục vụ ăn uống nội khu. Trang này hướng dẫn tìm và xác minh thay vì liệt kê cố định.',
    explore: 'Tiện lợi khi ở lại cả ngày: nghỉ trưa, uống nước và ăn nhẹ trong khu. Xác nhận khu vực mở và giờ phục vụ khi đến.',
    tips: 'Hỏi bản đồ khu vực ăn uống tại cổng; so sánh giá và mang theo nước. Xác nhận giờ trước khi xếp hàng.',
    highlights: [
      {title: 'Khu vực phục vụ', body: 'Hỏi vị trí nhà hàng/quầy ăn khi nhận bản đồ tại cổng.'},
      {title: 'Xác minh giá', body: 'Kiểm tra thực đơn và giá trước khi gọi; mang nước dự phòng.'},
      {title: 'Giờ nghỉ trưa', body: 'Sắp xếp nghỉ và ăn tránh giờ nắng gắt.'},
    ],
    about: 'Hướng dẫn ăn uống nội khu, không xác nhận quán cụ thể hay giá cố định.',
    basic: 'Địa điểm: trong Khu du lịch Đại Nam, '+ADDRESS+'.',
    directions: 'Xem Đường đi để xác nhận cổng và bãi đỗ.',
    notes: 'Giá nội khu thường cao hơn ngoài; mang nước và so sánh. Xác nhận giờ phục vụ.',
    faq: [
      {q: 'Trong Đại Nam có ăn được không?', a: 'Có khu vực phục vụ; hỏi bản đồ tại cổng vị trí và giờ.'},
      {q: 'Giá có đắt không?', a: 'Nội khu thường cao hơn; kiểm tra thực đơn trước.'},
      {q: 'Mang đồ ăn vào được không?', a: 'Hỏi quy định tại cổng; một số nơi hạn chế.'},
      {q: 'Có chỗ nghỉ không?', a: 'Có khu vực bóng râm; sắp xếp nghỉ trưa.'},
      {q: 'Nước uống ở đâu?', a: 'Quầy nước trong khu; mang theo chai dự phòng.'},
    ],
    related: ['nha-hang-gan-dai-nam', 'mon-ngon-gan-dai-nam', 'directions', 'dai-nam-cho-gia-dinh'],
  },

  // 30. Khách sạn gần Đại Nam
  {
    slug: 'khach-san-gan-dai-nam',
    title: 'Khách sạn gần Đại Nam – Cách tìm & chọn',
    h1: 'Khách sạn gần Đại Nam – Cẩm nang',
    description: 'Cách tìm khách sạn gần Đại Nam: vùng lưu trú, so sánh và xác minh. Hướng dẫn không liệt kê khách sạn cụ thể.',
    eyebrow: 'Xung quanh – Lưu trú',
    intro: 'Nếu ở lại qua đêm, vùng quanh Đại Nam và Bình Dương có nhiều lựa chọn lưu trú. Trang này hướng dẫn tự tìm thay vì danh sách cố định.',
    explore: 'Chọn theo khoảng cách đến khu, giá và tiện nghi. Thành phố lân cận có nhiều khách sạn hơn nếu muốn đa dạng.',
    tips: 'Dùng bản đồ lọc khách sạn theo khoảng cách và đánh giá. Xác nhận giá, hủy và chỗ đỗ trước khi đặt.',
    highlights: [
      {title: 'Vùng lưu trú', body: 'Quanh Đại Nam hoặc thành phố lân cận; cân nhắc khoảng cách và tiện nghi.'},
      {title: 'So sánh', body: 'Lọc theo giá, đánh giá và tiện nghi trên nền tảng đặt phòng.'},
      {title: 'Xác minh', body: 'Kiểm tra điều khoản hủy, chỗ đỗ và xác nhận ngày.'},
    ],
    about: 'Hướng dẫn tìm kiếm lưu trú, không xác nhận khách sạn cụ thể.',
    basic: 'Vùng tham chiếu: quanh Khu du lịch Đại Nam, '+ADDRESS+'.',
    directions: 'Xem Đường đi để ước khoảng cách từ nơi ở đến khu.',
    notes: 'Giá và tình trạng thay đổi; đặt sớm và xác nhận lại. Ưu tiên nền tảng có đánh giá thực tế.',
    faq: [
      {q: 'Có khách sạn gần Đại Nam?', a: 'Có nhiều lựa chọn quanh khu và vùng lân cận; tìm trên bản đồ.'},
      {q: 'Nên ở đâu?', a: 'Tùy khoảng cách và ngân sách; so sánh đánh giá trước.'},
      {q: 'Giá bao nhiêu?', a: 'Thay đổi; xác nhận trên nền tảng đặt phòng ngày đi.'},
      {q: 'Có chỗ đỗ không?', a: 'Hỏi khách sạn; xác nhận trước khi đặt.'},
      {q: 'Đặt ở đâu an toàn?', a: 'Qua nền tảng có đánh giá và chính sách hủy rõ.'},
    ],
    related: ['cho-o-gia-dinh-gan-dai-nam', 'directions', 'ban-do-khu-du-lich-dai-nam', 'dia-diem-du-lich-gan-dai-nam'],
  },

  // 31. Chỗ ở gia đình
  {
    slug: 'cho-o-gia-dinh-gan-dai-nam',
    title: 'Chỗ ở gia đình gần Đại Nam – Cách chọn',
    h1: 'Chỗ ở gia đình gần Đại Nam – Cẩm nang',
    description: 'Chỗ ở gia đình gần Đại Nam: nhà nghỉ, homestay và lưu ý cho nhóm gia đình. Hướng dẫn không bịa địa điểm cụ thể.',
    eyebrow: 'Xung quanh – Gia đình',
    intro: 'Đi gia đình đông người, chỗ ở riêng tư hoặc homestay thường tiện hơn. Trang này hướng dẫn lựa chọn an toàn.',
    explore: 'Ưu tiên nơi có phòng rộng, bếp hoặc gần ăn uống. Xác nhận an toàn, vệ sinh và khoảng cách đến khu.',
    tips: 'Lọc theo số khách, tiện nghi gia đình và đánh giá. Xác nhận giường, trẻ em và chỗ đỗ.',
    highlights: [
      {title: 'Phù hợp nhóm', body: 'Chọn phòng gia đình hoặc nhà nguyên căn cho đông người.'},
      {title: 'Tiện nghi', body: 'Ưu tiên bếp, tủ lạnh và gần điểm ăn uống.'},
      {title: 'Xác minh', body: 'Kiểm tra đánh giá, an toàn và điều khoản hủy.'},
    ],
    about: 'Hướng dẫn chọn chỗ ở gia đình, không xác nhận địa điểm cụ thể.',
    basic: 'Vùng tham chiếu: quanh Khu du lịch Đại Nam, '+ADDRESS+'.',
    directions: 'Xem Đường đi để ước khoảng cách từ chỗ ở đến khu.',
    notes: 'Xác nhận trẻ em có phụ phí không và an toàn khu vực. Đặt sớm dịp lễ.',
    faq: [
      {q: 'Có chỗ ở gia đình không?', a: 'Có nhà nghỉ/homestay quanh khu; tìm trên bản đồ và lọc gia đình.'},
      {q: 'Tiện nghi gì cần?', a: 'Phòng rộng, bếp, gần ăn uống và chỗ đỗ.'},
      {q: 'Trẻ em phụ phí không?', a: 'Hỏi từng nơi; xác nhận trước khi đặt.'},
      {q: 'An toàn không?', a: 'Ưu tiên đánh giá thực tế và khu vực rõ ràng.'},
      {q: 'Đặt ở đâu?', a: 'Qua nền tảng có chính sách hủy và đánh giá.'},
    ],
    related: ['khach-san-gan-dai-nam', 'dai-nam-cho-gia-dinh', 'directions'],
  },

  // 32. Địa điểm du lịch gần
  {
    slug: 'dia-diem-du-lich-gan-dai-nam',
    title: 'Địa điểm du lịch gần Đại Nam – Tổng quan',
    h1: 'Địa điểm du lịch gần Đại Nam – Tổng quan',
    description: 'Các loại hình du lịch quanh Đại Nam: văn hóa, thiên nhiên, nghỉ dưỡng và cách lập lộ trình. Hướng dẫn không bịa điểm cụ thể.',
    eyebrow: 'Xung quanh – Tổng quan',
    intro: 'Bình Dương và vùng lân cận có nhiều loại hình du lịch bên cạnh Đại Nam. Trang này giúp hình dung để tự lập lộ trình.',
    explore: 'Có thể kết hợp Đại Nam với bảo tàng, chùa, công viên hoặc làng nghề tùy sở thích. Tập trung vào loại hình phù hợp.',
    tips: 'Xác định loại hình (văn hóa, thiên nhiên, ẩm thực) rồi tìm điểm cụ thể trên bản đồ. Xác minh giờ và khoảng cách.',
    highlights: [
      {title: 'Văn hóa', body: 'Chùa, bảo tàng và di tích vùng Bình Dương; xác minh trước.'},
      {title: 'Thiên nhiên', body: 'Công viên, hồ và khu sinh thái gần khu.'},
      {title: 'Ẩm thực', body: 'Kết hợp điểm ăn uống địa phương vào ngày.'},
    ],
    about: 'Tổng quan loại hình, không xác nhận danh sách điểm cụ thể.',
    basic: 'Vùng tham chiếu: Bình Dương và lân cận, quanh '+ADDRESS+'.',
    directions: 'Xem Đường đi để ghép các điểm vào lộ trình.',
    notes: 'Khoảng cách và giờ thay đổi; lập lộ trình linh hoạt và xác minh từng điểm.',
    faq: [
      {q: 'Gần Đại Nam có gì chơi?', a: 'Nhiều loại hình văn hóa, thiên nhiên, ẩm thực; tìm theo sở thích.'},
      {q: 'Kết hợp được không?', a: 'Được; lập lộ trình theo loại hình và khoảng cách.'},
      {q: 'Có bảo tàng không?', a: 'Vùng có bảo tàng/di tích; xác minh trên bản đồ trước.'},
      {q: 'Đi mấy ngày?', a: 'Tùy kế hoạch; Đại Nam có thể nửa đến 1 ngày, cộng điểm lân cận.'},
      {q: 'Xác minh thế nào?', a: 'Dùng bản đồ và đánh giá; hỏi giờ từng điểm.'},
    ],
    related: ['dai-nam-thu-dau-mot', 'dai-nam-diem-tham-quan-van-hoa', 'khach-san-gan-dai-nam', 'directions'],
  },

  // 33. Đại Nam & Thủ Dầu Một
  {
    slug: 'dai-nam-thu-dau-mot',
    title: 'Đại Nam & Thủ Dầu Một – Lộ trình kết hợp',
    h1: 'Đại Nam & Thủ Dầu Một – Cẩm nang',
    description: 'Kết hợp Đại Nam với Thủ Dầu Một: lộ trình, khoảng cách và điểm dừng. Hướng dẫn không bịa điểm cụ thể.',
    eyebrow: 'Xung quanh – Thủ Dầu Một',
    intro: 'Thủ Dầu Một là thành phố lân cận Đại Nam, thuận tiện ghép thành ngày hoặc hai ngày.',
    explore: 'Có thể chơi Đại Nam buổi sáng, chiều ghé Thủ Dầu Một hoặc ngược lại. Tập trung vào loại hình phù hợp.',
    tips: 'Xác định điểm ở Thủ Dầu Một theo sở thích (văn hóa, ẩm thực), rồi ghép lộ trình. Kiểm tra khoảng cách và giờ.',
    highlights: [
      {title: 'Khoảng cách', body: 'Thủ Dầu Một gần Đại Nam; xác nhận lộ trình trên bản đồ.'},
      {title: 'Chia ngày', body: 'Đại Nam nửa ngày + Thủ Dầu Một nửa ngày, hoặc nghỉ đêm.'},
      {title: 'Lộ trình', body: 'Ghép theo loại hình và tránh giờ cao điểm.'},
    ],
    about: 'Hướng dẫn kết hợp hai địa bàn, không xác nhận điểm cụ thể.',
    basic: 'Vùng: Đại Nam ('+ADDRESS+') và Thủ Dầu Một, Bình Dương.',
    directions: 'Xem Đường đi để xác nhận lộ trình giữa hai nơi.',
    notes: 'Giờ cao điểm QL13 dễ kẹt; kiểm tra giao thông. Xác minh từng điểm trước.',
    faq: [
      {q: 'Thủ Dầu Một có xa Đại Nam?', a: 'Gần; xác nhận lộ trình trên bản đồ.'},
      {q: 'Đi được trong ngày không?', a: 'Được; chia nửa ngày mỗi nơi hoặc nghỉ đêm.'},
      {q: 'Nên bắt đầu từ đâu?', a: 'Tùy giờ và sở thích; Đại Nam sáng mát thường thuận.'},
      {q: 'Có gì ở Thủ Dầu Một?', a: 'Loại hình văn hóa, ẩm thực; tìm theo sở thích.'},
      {q: 'Đỗ xe thế nào?', a: 'Xem Bãi đỗ xe Đại Nam và hỏi điểm Thủ Dầu Một.'},
    ],
    related: ['dia-diem-du-lich-gan-dai-nam', 'dai-nam-diem-tham-quan-van-hoa', 'directions', 'ban-do-khu-du-lich-dai-nam'],
  },

  // 34. Điểm văn hóa
  {
    slug: 'dai-nam-diem-tham-quan-van-hoa',
    title: 'Điểm tham quan văn hóa gần Đại Nam',
    h1: 'Điểm tham quan văn hóa gần Đại Nam – Cẩm nang',
    description: 'Các loại hình văn hóa lịch sử quanh Đại Nam và cách tìm, xác minh. Hướng dẫn không bịa điểm cụ thể.',
    eyebrow: 'Xung quanh – Văn hóa',
    intro: 'Bên cạnh Đại Nam, vùng Bình Dương có chùa, bảo tàng và di tích lịch sử. Trang này hướng dẫn tự tìm.',
    explore: 'Phù hợp người thích tìm hiểu lịch sử, tôn giáo và làng nghề. Kết hợp nhẹ nhàng với ngày Đại Nam.',
    tips: 'Tìm theo từ khóa "chùa", "bảo tàng", "di tích" + vùng Bình Dương. Xác minh giờ và quy tắc trang phục.',
    highlights: [
      {title: 'Tôn giáo', body: 'Chùa và cơ sở tôn giáo vùng lân cận; tôn trọng trang phục.'},
      {title: 'Bảo tàng', body: 'Bảo tàng địa phương; xác minh giờ và ngày đóng.'},
      {title: 'Làng nghề', body: 'Một số làng nghề truyền thống; hỏi trước khi đến.'},
    ],
    about: 'Hướng dẫn loại hình văn hóa, không xác nhận điểm cụ thể.',
    basic: 'Vùng: Bình Dương và lân cận, quanh '+ADDRESS+'.',
    directions: 'Xem Đường đi để ghép điểm văn hóa vào lộ trình.',
    notes: 'Tôn trọng không gian tôn giáo; kiểm tra giờ và ngày lễ đóng/mở.',
    faq: [
      {q: 'Có điểm văn hóa nào gần?', a: 'Chùa, bảo tàng, di tích vùng Bình Dương; tìm trên bản đồ.'},
      {q: 'Có phù hợp trẻ em không?', a: 'Có nếu quan sát nhẹ; giữ trật tự và tôn trọng.'},
      {q: 'Mặc gì?', a: 'Trang phục lịch sự ở cơ sở tôn giáo.'},
      {q: 'Mở cửa ngày lễ không?', a: 'Tùy nơi; xác minh trước.'},
      {q: 'Kết hợp với Đại Nam sao?', a: 'Ghép nhẹ nhàng; xem Đại Nam & Thủ Dầu Một.'},
    ],
    related: ['dia-diem-du-lich-gan-dai-nam', 'dai-nam-thu-dau-mot', 'kim-dien-dai-nam', 'directions'],
  },

  // 35. Tour từ Sài Gòn
  {
    slug: 'tour-dai-nam-tu-sai-gon',
    title: 'Tour Đại Nam từ Sài Gòn – Gợi ý một ngày',
    h1: 'Tour Đại Nam từ Sài Gòn – Cẩm nang',
    description: 'Gợi ý tour Đại Nam từ TP.HCM: lộ trình, thời gian và điểm ghép. Thứ tự là đề xuất, không phải lịch xác minh.',
    eyebrow: 'Lộ trình – Từ Sài Gòn',
    intro: 'Đại Nam thuận tiện đi trong ngày từ TP.HCM. Trang này gợi ý cách kết hợp thành tour nhẹ nhàng.',
    explore: 'Sáng đi, chơi Đại Nam, chiều về hoặc ghép điểm ăn uống/ảnh. Tùy thời gian và thời tiết.',
    tips: 'Lên lộ trình theo QL13, tránh giờ cao điểm. Ghép điểm ăn và nghỉ. Xác minh giờ khu trước.',
    highlights: [
      {title: 'Lộ trình', body: 'TP.HCM – QL13 – Đại Nam; tránh giờ cao điểm.'},
      {title: 'Thời gian', body: 'Nửa đến 1 ngày tại Đại Nam tùy lộ trình.'},
      {title: 'Ghép điểm', body: 'Thêm ăn uống hoặc ảnh gần khu.'},
    ],
    about: 'Gợi ý tour từ Sài Gòn, không xác minh lịch cụ thể.',
    basic: 'Điểm đến: Khu du lịch Đại Nam, '+ADDRESS+'.',
    directions: 'Xem Đường đi và Từ TP.HCM đến Đại Nam để xác nhận lộ trình.',
    route: [
      {title: 'Xuất phát sớm', body: 'Tránh giờ cao điểm QL13; đến khi mát.'},
      {title: 'Chơi Đại Nam', body: 'Theo cụm văn hóa, động vật hoặc nước.'},
      {title: 'Ghép điểm về', body: 'Thêm ăn uống hoặc chụp ảnh gần khu trước về.'},
    ],
    notes: 'Kiểm tra giao thông và thời tiết. Xác minh giờ từng phân khu trước.',
    faq: [
      {q: 'Từ Sài Gòn đi Đại Nam mất bao lâu?', a: 'Phụ thuộc giờ và giao thông; xem Từ TP.HCM đến Đại Nam.'},
      {q: 'Có thể đi trong ngày không?', a: 'Rất thuận tiện; nửa đến 1 ngày.'},
      {q: 'Ghép được gì?', a: 'Ăn uống, ảnh hoặc điểm văn hóa lân cận.'},
      {q: 'Nên đi ngày nào?', a: 'Ngày thường để tránh đông và kẹt xe.'},
      {q: 'Có cần tour trọn gói?', a: 'Tự đi thuận tiện; cẩm nang không bán tour.'},
    ],
    related: ['tu-tp-hcm-den-dai-nam', 'directions', 'ban-do-khu-du-lich-dai-nam', 'dia-diem-du-lich-gan-dai-nam'],
  },
];

export const topicBySlug: Record<string, Topic> = Object.fromEntries(topics.map(t => [t.slug, t]));
export function linkFor(slug: string): {href: string; label: string} | null {
  if (navLinks[slug]) return navLinks[slug];
  const t = topicBySlug[slug];
  return t ? {href: '/' + t.slug + '/', label: t.h1} : null;
}
