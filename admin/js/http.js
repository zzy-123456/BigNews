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
})(window);