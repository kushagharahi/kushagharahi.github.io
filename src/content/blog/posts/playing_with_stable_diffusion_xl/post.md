### "Dogwarts"

![A dog dressed as a hogwarts wizard](~posts/playing_with_stable_diffusion_xl/dogwarts.png)
Positive Prompt: 
```
award winning photography, a cute dog in the style of a hogwarts harry potter wizard 
```

Negative Prompt:
```
text, watermark
```

⬛ Base Image
✅ Refiner Image

---

### (a bad attempt at) Barbenheimer

![Barbie walking away from an explosion](~posts/playing_with_stable_diffusion_xl/barbie_explosion.png)
Positive Prompt: 
```
award winning photography, realistic barbie doll and a 600 lb roll of film being exploded in an atomic blast 
```

Negative Prompt:
```
text, watermark
```

⬛ Base Image
✅ Refiner Image

---

### Melting Computer in the style of surrealist painting "The Persistence of Memory"

![melting computers in the style of a salvador dali painting](~posts/playing_with_stable_diffusion_xl/computer_melt_dali.png)
Positive Prompt: 
```
melting computers in the style of salvador dali painting
```

Negative Prompt:
```
text, watermark
```

⬛ Base Image
✅ Refiner Image

---

### Cookie Monster convertible photo shoot?

![alt](~posts/playing_with_stable_diffusion_xl/cookie_ride.png)
Positive Prompt: 
```
award winning photography, cookie monster from sesame street eating a messy cookie riding fast in a top down convertible car with cookie tires 
```

Negative Prompt:
```
text, watermark
```

⬛ Base Image
✅ Refiner Image

---

### Vin Diesel and Grilled Cheese. A classic combo

![alt](~posts/playing_with_stable_diffusion_xl/diesel_cheese.png)
Positive Prompt: 
```
award winning photography, vin diesel with a bunch of grilled cheese falling onto his face
```

Negative Prompt:
```
text, watermark
```

⬛ Base Image
✅ Refiner Image

---

### Vaporwave Ballerina

![alt](~posts/playing_with_stable_diffusion_xl/vaporwave_ballerina.png)
Positive Prompt: 
```
award winning photography, vapor wave aesthetic with dark colors of a ballerina with a glitchy sign lurking in the background
```

Negative Prompt:
```
text, watermark
```

✅ Base Image
⬛ Refiner Image

---

## How were these made?

I used [ComfyUI](https://github.com/comfyanonymous/ComfyUI) with [Stable Diffusion XL Base 1.0](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0) and [Stable Diffusion XL Refiner 1.0](https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0) to generate these images

ComfyUI is a UI that allows users to create custom pipelines to run different stable diffusion models.

You will need somewhat of a beefy graphics card (recommended) or CPU (very slow) to generate these images. I generated these images on an AMD 6850 XT. They took about 7 minute a piece to generate and then run through the refiner. 

- Follow the ComfyUI [installation procedure](https://github.com/comfyanonymous/ComfyUI#windowsprocedure)  
- Download the SDXL base and refiner models from Huggingface (the file that ends in `.safetensors`). I used the ones that don't have `vue` in the file name.
- Place the downloaded models in `/ComfyUI/models/checkpoints`
- Run the UI by following the ComfyUI Readme
- Import my workflow JSON [download](https://github.com/kushagharahi/comfyui-workflows/blob/main/sdxlworkflow.json) (NOTE: You may need to change the filenames in the JSON to match the files you downloaded)
- Voila! Enjoy using SDXL! Your screen should look something like this: 

![ComfyUI](~posts/playing_with_stable_diffusion_xl/comfyui.png)