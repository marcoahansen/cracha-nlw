const socialMediaLinks = {
  github: 'marcoahansen',
  youtube: 'MarcoAurelioHansen',
  facebook: 'marcoaureliohansen',
  instagram: 'marcoahansen',
  linkedin: '/in/marco-hansen-993ba736/'
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

const socialMedias = [
  {
    class: 'youtube',
    link: `https://youtube.com/${socialMediaLinks['youtube']}`,
    img: 'images/youtube.svg'
  },
  {
    class: 'instagram',
    link: `https://instagram.com/${socialMediaLinks['instagram']}`,
    img: 'images/instagram.svg'
  },
  {
    class: 'facebook',
    link: `https://facebook.com/${socialMediaLinks['facebook']}`,
    img: 'images/facebook.svg'
  },
  {
    class: 'linkedin',
    link: `https://linkedin.com/${socialMediaLinks['linkedin']}`,
    img: 'images/linkedin.png'
  }
]

socialMedias.forEach((socialMedia) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.setAttribute('src', socialMedia.img);
  li.onclick = () => {
    window.open(socialMedia.link)
  };
  li.appendChild(img);
  li.className = socialMedia.class;

  socialLinks.appendChild(li);
})