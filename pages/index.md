
![Oostende](images/Oostende.jpg)

## Genbukan Ninpo Bugei

Genbukan Ninpo Bugei ist ein traditionelles japanisches Kampfkunstsystem, unter
dem mehrere traditionelle Stile (Ninjursu, Ju Jutsu, Schwert-und Stockschulen)
vereint sind und separat unterrichtet werden (s.Systeme).

Zu dem, was du bei uns lernen kannst, gehören:

* Fluchttechniken (Fall- und Rolltechniken) (jap. Taihenjutsu)
* Schlag und Tritttechniken (jap. Dakentaijutsu & Jutaijutsu)
* Bodenkampf (Grappling, Mixed Martial Arts)
* Kampf in Trainings- und Alltagskleidung oder Keiko Gi
* Techniken gegen mehrere Angreifer
* Hebel und Würfe (jap. Gyakuwaza & Nagewaza)
* Kontertechniken gegen Würfe
* unbewaffneter Kampf gegen bewaffnete Gegner
* Selbstverteidigung
* Waffentechniken

Der Genbukan Ninpo Bugei Verband Deutschland will Dich einladen von über 900
Jahren japanischer Kriegskunst, Kampfkunst und spirituellem Wissen zu
profitieren und dir diese Dinge in gefährlichen Situationen, für die
Selbstverteidigung sowie im Alltag, zunutze zu machen.

## Unsere Dojos

<div class="row">
  <div class="one-half column">
    <ul>
      <li><a href="/dojos.html#berlin">Kurohyou Dojo Berlin</a></li>
      <li><a href="/dojos.html#karlsruhe">Mikajama Dojo Karlsruhe</a></li>
      <li><a href="/dojos.html#linsburg">Gruppe Linsburg (Nieburg)</a></li>
      <li><a href="/dojos.html#osnabrueck">Gruppe Osnabrück</a></li>
    </ul>
  </div>
  <div class="one-half column">
    <div id="map0" style="height:100%;min-height:350px;border:1px  solid black"></div>
  </div>
</div>
<script type="text/javascript">
  function mapMap(id, coords, zoom, markers) {
    var map = L.map(id).setView(coords, zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    markers.forEach(marker => {
      L.marker(marker.coords).addTo(map)
        .bindPopup(marker.text)
        .openPopup();
    })
  }

  mapMap('map0', [50.97461, 10.32057], 5, [
    {coords: [49.00581, 8.40412], text: 'Mikajama Dojo Karlsruhe'},
    {coords: [52.59371, 9.30341], text: 'Gruppe Linsburg (Nieburg)'},
    {coords: [52.27189, 8.04813], text: 'Gruppe Osnabrück'},
    {coords: [52.51727, 13.38821], text: 'Kurohyou Dojo Berlin'}
  ])
</script>
