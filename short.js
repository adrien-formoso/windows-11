const body = document.querySelector("body")

function create_desktop() {
    {
        const desktop = document.createElement("div")
        desktop.id = "Desktop"
        body.appendChild(desktop)
    
            const taskbar = document.createElement("div")
            taskbar.id = "taskbar"
            desktop.appendChild(taskbar)
    
                const element_taskbar = document.createElement("div")
                element_taskbar.classList.add("element_taskbar")
                taskbar.appendChild(element_taskbar)
    
                const windows_icon = document.createElement("img")
                windows_icon.src = "./asset/asset_taskbar/microsoft-windows-11.svg"
                element_taskbar.appendChild(windows_icon)
    }}

body.removeChild(login)
create_desktop()