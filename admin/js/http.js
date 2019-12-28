/* 沙箱模式 */
(function (window) {
    const token = localStorage.getItem('token')
    $.ajaxSetup({
        beforeSetup(xhr) {
            if (!token) {
                location.href = './login.html'
            }
            if (location.href.indexOf('login.html') === -1) {
                xhr.setRequesHeader('Authorization', token)
            }

        }
    })
    const baseURL = 'http://localhost:8080/api/v1/';
    const urls = {
        userInfo: baseURL + 'admin/user/info',
        userDetail: baseURL + 'admin/user/detail',
        userDetail: baseURL + 'admin/user/edit'
    }
    window.urls = urls

})(window);