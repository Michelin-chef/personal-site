export const personalInfo = {
  name: '李灰灰',
  title: '嵌入式软件开发工程师',
  tagline: '4年嵌入式C/C++开发经验，专注音视频编解码与系统优化',
  phone: '13800000000',
  displayPhone: '138****0000',
  email: 'zhangwei@example.com',
  displayEmail: 'zha****ei@example.com',
  avatar: null,
}

export const aboutText = `具备4年嵌入式C/C++开发经验，擅长模块化开发与性能调优，具备独立定位与解决复杂问题的能力。
学习能力强，对新技术保持高度敏感，持续学习 DSP 音视频算法、Jenkins 流水线开发。
注重工程化与团队协作，善于通过制定规范与流程提升团队研发效率，乐于沟通分享经验。`

export const skills = [
  {
    category: '编程语言',
    items: ['C/C++', 'Python', 'Shell'],
    icon: 'Code2',
  },
  {
    category: '嵌入式系统',
    items: ['MCU开发', 'RTOS实时系统', '嵌入式Linux', 'I2C/SPI/UART'],
    icon: 'Cpu',
  },
  {
    category: '音视频技术',
    items: ['音视频编解码', 'RTP协议', 'FPGA/Codec/DSP对接', '流媒体传输'],
    icon: 'Video',
  },
  {
    category: '网络与协议',
    items: ['TCP/IP协议栈', 'WiFi/蓝牙', '私有通信协议', 'WireShark抓包'],
    icon: 'Wifi',
  },
  {
    category: '调试与工具',
    items: ['逻辑分析仪', '示波器', 'SecureCRT', 'Jenkins CI/CD'],
    icon: 'Wrench',
  },
  {
    category: '专业能力',
    items: ['Apple MFI认证', '音视频接口调试', '性能优化', '软硬件联调'],
    icon: 'Zap',
  },
]

export const experiences = [
  {
    company: '趣第一源科技有限公司',
    role: '嵌入式软件开发工程师',
    period: '2021.12 - 至今',
    highlights: [
      '负责音视频编解码与传输，对接 FPGA/Codec/DSP 等模块，保障系统音视频链路低时延、低失真和高带宽稳定性',
      '主导无线麦克风项目核心模块开发，全程负责需求预研与方案设计，协调解决音视频采集与传输链路问题',
      '参与内部通信系统项目的协议转换算法开发，将转换响应时延从 1s 优化至 10ms 内，显著提升用户体验',
      '主导多款音视频接口开发与调试，对接多家厂商 Codec 并进行兼容性适配，解决软硬件协同导致的音视频失真问题',
      '重构 Apple MFI 认证框架，优化认证流程代码实现，成功通过苹果复审，提升团队开发效率与产品质量',
      '制定私有通信协议，优化多路数据分发与传输机制，保证 200+ 路音视频数据流的准确性和实时性',
    ],
  },
]

export const projects = [
  {
    name: '内部通信系统',
    platform: 'Linux 平台',
    period: '2024.10 - 2026.03',
    summary: '面向大型活动与行业指挥调度场景的群组通信系统。包含移动终端、无线基站、调度服务器，实现 80 路群组通信与 13 路视频设备接入，解决低失真、低时延和多路音视频无缝切换的核心挑战。',
    contributions: [
      '负责基站与服务器端音视频编解码管线的构建、性能调优与算法实现，保障 RTP 协议网络传输稳定性',
      '负责信令模块的通信数据封装设计及实现，优化响应速度与用户体验',
      '制定系统资源动态分配策略与协议，实现自适应资源分配算法，提升资源分配速度，优化资源利用与服务质量',
      '负责多款音视频接口适配与调试，对接多家硬件厂商 Codec 进行兼容性适配，完成相关 AP 音视频性能测试',
    ],
    tech: ['Linux', 'C/C++', 'RTP', '音视频编解码', 'TCP/IP'],
  },
  {
    name: '无线麦克风项目',
    platform: 'MCU 平台',
    period: '2022.06 - 2023.12',
    summary: '面向音视频无线传输的专业级设备，通过 TX/RX 双端协同设计，实现音视频采集、无线传输、本地存储、UI 显示与参数配置等功能。',
    contributions: [
      '负责音视频模块的选型与方案设计，对接原厂技术支持，协调解决音视频兼容性问题，完成无线方案的实现与测试',
      '主导 MFI 苹果认证功能开发，搭建认证流程框架并完成功能实现，显著提升认证通过率与复审效率',
      '负责音视频时延、失真等核心指标的量化测试与优化',
    ],
    tech: ['MCU', 'C/C++', 'RTOS', 'I2C/SPI', 'Apple MFI'],
  },
]

export const education = {
  school: '某理工院校',
  degree: '计算机科学 本科',
  period: '2018.06 - 2022.06',
  details: [
    'GPA：3.3/4.0，排名前 20%',
    '在校获院级二等奖学金、程序设计竞赛省级二等奖',
    'CET-4',
  ],
}

export const navLinks = [
  { label: '关于', href: '#about' },
  { label: '技能', href: '#skills' },
  { label: '经历', href: '#experience' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
]
