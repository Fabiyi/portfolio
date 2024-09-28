


function showSkills(){
    const 
    document.getElementById('')
}

document.querySelectorAll('.tab-contents').forEach(tab-contents => 
    tab-contents.addEventListener('click',() => {
        document.querySelectorAll('.content').forEach(content =>
            content.classList.add('hidden')
        );
        const targetId=tab-contents.getAttribute('data-target');
        document.getElementById(targetId).classList.remove('hidden');
    })
);