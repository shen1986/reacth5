declare namespace mui {

    // 弹出框
    type alertType = 'div' | undefined
    function alert(message: string, title?: string, btnValue?: string, callback?: Function, type?: alertType): void
    function confirm(message: string, title?: string, btnValue?: string, callback?: Function, type?: alertType): void
}