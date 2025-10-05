interface Project {
  banner: string; // 图片链接
  title: string; // 项目标题
  description: string; // 项目简介
  link: string; // 项目链接
  tag?: string; // 项目标签
}

/**
 * TODO: 缺项处理
 * 在此处填写你的项目介绍
 */
export const projectsInfo: Project[] = [
  {
    banner: "/project-img/studentManager.png",
    title: "学生扣分管理系统",
    description:
      "基于 flask 和 antDesign Vue 框架的学生扣分管理系统",
    link: "https://github.com/ischenyu/FlaskStudentManager",
    tag: "Python",
  },
  {
    banner: "/project-img/dora-bot.png",
    title: "APIGo",
    description:
      "(Developing)基于 Go-Gon 框架开发的 API",
    link: "https://github.com/ischenyu/APIGo",
    tag: "Go",
  },
];
