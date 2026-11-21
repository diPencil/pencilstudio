Add-Type -AssemblyName System.Drawing

function Crop-Image($srcPath, $destPath, $yOffset) {
    $src = [System.Drawing.Image]::FromFile($srcPath)
    $crop = New-Object System.Drawing.Bitmap 1280, 500
    $g = [System.Drawing.Graphics]::FromImage($crop)
    $g.DrawImage($src, (New-Object System.Drawing.Rectangle 0, 0, 1280, 500), (New-Object System.Drawing.Rectangle 0, $yOffset, 1280, 500), [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $crop.Save($destPath)
    $crop.Dispose()
    $src.Dispose()
}

# Generate crops at different offsets for inspection
for ($y = 0; $y -lt 6500; $y += 500) {
    Crop-Image 'd:\Development\pencil\dipencilcom\pencilnew\arabic_full.png' "C:\Users\mahmo\.gemini\antigravity\brain\3119a94d-18d7-4173-9511-922dcc46cc85\arabic_crop_$y.png" $y
    Crop-Image 'd:\Development\pencil\dipencilcom\pencilnew\english_full.png' "C:\Users\mahmo\.gemini\antigravity\brain\3119a94d-18d7-4173-9511-922dcc46cc85\english_crop_$y.png" $y
}
