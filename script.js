document.addEventListener('DOMContentLoaded',()=>{
  // Esconder avatar quando imagem carregar
  const img = document.querySelector('.zeus-photo');
  if(img){
    img.addEventListener('load',()=>{
      const avatar = document.querySelector('.avatar');
      if(avatar) avatar.style.display = 'none';
    });
    img.addEventListener('error',()=>{
      img.style.display = 'none';
    });
  }
  // Curtir
  document.querySelectorAll('.like-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const span = btn.querySelector('.like-count');
      let count = parseInt(span.textContent,10)||0;
      if(btn.classList.contains('liked')){
        count = Math.max(0,count-1);
        btn.classList.remove('liked');
      } else {
        count = count+1;
        btn.classList.add('liked');
      }
      span.textContent = count;
    });
  });

  // Comentários (local)
  document.querySelectorAll('.comment-form').forEach(form=>{
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const input = form.querySelector('input[name="comment"]');
      const text = input.value.trim();
      if(!text) return;
      const list = form.parentElement.querySelector('.comment-list');
      const li = document.createElement('li');
      li.textContent = text;
      list.prepend(li);
      input.value = '';
    });
  });
});
