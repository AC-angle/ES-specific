
// 页面懒加载

const pages = {
    "WebWorkers": () => import("./pages/WebWorkers.iCrush"),
    "Binary": () => import("./pages/Binary.iCrush"),
};

// 跳转方法

export default function (pagename, doback) {

    window.location.hash = pagename;

    pages[pagename]().then(data => {
        doback(data.default);
    });

};
