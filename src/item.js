export function drawGalleryItem(item) {
  const itemElement = document.createElement('div');
  itemElement.classList = 'gallery-item';

  const resourceWrapElement = document.createElement('div')
  resourceWrapElement.classList = "gallery-item_resource"

  if (item.type === 'image') {
    const imgElement = document.createElement('img')
    imgElement.classList = 'gallery-item_image'
    imgElement.src = item.resource
    itemElement.appendChild(imgElement)
  } else if (item.type === 'audio') {
    const audioElement = document.createElement('audio')
    audioElement.classList = 'gallery-item_audio'
    audioElement.src = item.resource
    audioElement.controls = true
    resourceWrapElement.appendChild(audioElement)
  } else {
    (item.type === 'video')
    const videoEl = document.createElement('video')
    videoEl.classList = 'gallery-item_video'
    videoEl.src = item.resource
    videoEl.controls = true
    itemElement.appendChild(videoEl)
  }


  const titleElement = document.createElement('span')
  titleElement.classList = 'gallery-item_title'
  titleElement.textContent = item.title

  itemElement.appendChild(resourceWrapElement)
  itemElement.appendChild(titleElement)

  return itemElement
}