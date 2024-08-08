// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-register',
  templateUrl: './register.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class registerComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_BgASWDoNNDLvREEx(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_BgASWDoNNDLvREEx(bh) {
    try {
      bh = this.sd_qbcL6EDx4s9errrE(bh);
      //appendnew_next_sd_BgASWDoNNDLvREEx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BgASWDoNNDLvREEx');
    }
  }

  choosenFile(e: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { e };
      bh.local = {};
      bh = this.sd_ui8XtUgy4yYiNigj(bh);
      //appendnew_next_choosenFile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xgrnl9jNTFHAi8NM');
    }
  }

  uploadFile(e: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { e };
      bh.local = {};
      bh = this.determineCheckboxAction(bh);
      //appendnew_next_uploadFile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ODrEhcjeZXybgp3P');
    }
  }

  submit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_F1KAnaY4wVkDJqRf(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oY3r2CY1TsFyUNv1');
    }
  }
  //appendnew_flow_registerComponent_start

  sd_qbcL6EDx4s9errrE(bh) {
    try {
      bh = this.sd_E3q6oWuMs3uEJ7Sb(bh);
      //appendnew_next_sd_qbcL6EDx4s9errrE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qbcL6EDx4s9errrE');
    }
  }

  sd_E3q6oWuMs3uEJ7Sb(bh) {
    try {
      this.page.cardForm = undefined;
      this.page.formFile = undefined;
      this.page.checkboxIsChecked = false;
      this.page.ssdURL = undefined;
      this.page.showSpinner = false;
      this.page.itemToEdit = undefined;
      bh = this.sd_MkkdHKJPHbkdQIPt(bh);
      //appendnew_next_sd_E3q6oWuMs3uEJ7Sb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E3q6oWuMs3uEJ7Sb');
    }
  }

  sd_MkkdHKJPHbkdQIPt(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_7VY0yNi07Ho37wWU(bh);
      //appendnew_next_sd_MkkdHKJPHbkdQIPt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MkkdHKJPHbkdQIPt');
    }
  }

  sd_7VY0yNi07Ho37wWU(bh) {
    try {
      const page = this.page;
      page.cardForm = new FormGroup({
        _id: new FormControl(new Date().getTime()),
        title: new FormControl('', [
          Validators.required,
          Validators.pattern(/^.{18,25}$/),
        ]),
        description: new FormControl('', [
          Validators.required,
          Validators.pattern(/^.{20,80}$/),
        ]),
        fileName: new FormControl('', [Validators.required]),
      });
      //appendnew_next_sd_7VY0yNi07Ho37wWU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7VY0yNi07Ho37wWU');
    }
  }

  sd_ui8XtUgy4yYiNigj(bh) {
    try {
      const page = this.page;
      const file: File | null = bh.input.e.target.files?.[0] || null;

      if (file) {
        page.cardForm.get('fileName').setValue(file.name);
        page.formFile = new FormData();
        page.formFile.append('file', file);
      }
      //appendnew_next_sd_ui8XtUgy4yYiNigj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ui8XtUgy4yYiNigj');
    }
  }

  determineCheckboxAction(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.e.checked,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_UlqsFSZGMkU28Fih(bh);
      } else {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KaFbeqtgeiXb9DuQ');
    }
  }

  sd_UlqsFSZGMkU28Fih(bh) {
    try {
      const page = this.page;
      bh.isUploadedFile = false;
      page.checkboxIsChecked = false;

      if (page.formFile) {
        bh.isUploadedFile = true;
      }
      // document.getElementById('checkbox-input')?.value = false;
      // console.log(document.getElementById('checkbox-input').checked)
      bh = this.sd_7N6Hx572EmVgCFER(bh);
      //appendnew_next_sd_UlqsFSZGMkU28Fih
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UlqsFSZGMkU28Fih');
    }
  }

  async sd_7N6Hx572EmVgCFER(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.isUploadedFile,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_2CdtGkwdQ1krEa4z(bh);
      } else {
        bh = await this.sd_1VKehTz07tmM77HK(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7N6Hx572EmVgCFER');
    }
  }

  sd_2CdtGkwdQ1krEa4z(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + '/upload-file';
      page.showSpinner = true;
      bh = this.uploadingFile(bh);
      //appendnew_next_sd_2CdtGkwdQ1krEa4z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2CdtGkwdQ1krEa4z');
    }
  }

  async uploadingFile(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.formFile,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_uploadingFile
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f26m2C5nM3orrPem');
    }
  }

  sd_1VKehTz07tmM77HK(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('No file chosen', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_1VKehTz07tmM77HK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1VKehTz07tmM77HK');
    }
  }

  async sd_F1KAnaY4wVkDJqRf(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.cardForm.invalid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_4VR3gyyfD9IIVoOS(bh);
      } else {
        bh = await this.sd_wafbSf0v9GaVPLWM(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F1KAnaY4wVkDJqRf');
    }
  }

  async sd_wafbSf0v9GaVPLWM(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.isFileUploaded,
          undefined,
          undefined,
          undefined
        )
      ) {
      } else {
        bh = await this.sd_5Gc3eAkrVVV9iljV(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wafbSf0v9GaVPLWM');
    }
  }

  sd_5Gc3eAkrVVV9iljV(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('You need to upload file to continue', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_mZ3QmT8pMaLB68j3(bh);
      //appendnew_next_sd_5Gc3eAkrVVV9iljV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5Gc3eAkrVVV9iljV');
    }
  }

  sd_mZ3QmT8pMaLB68j3(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + '/add-card';
      page.showSpinner = true;
      bh.body = page.cardForm.value;
      bh = this.sd_DWmK0rHbVFjpVezx(bh);
      //appendnew_next_sd_mZ3QmT8pMaLB68j3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mZ3QmT8pMaLB68j3');
    }
  }

  async sd_DWmK0rHbVFjpVezx(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_bGIm17o4L3x8p2tw(bh);
      //appendnew_next_sd_DWmK0rHbVFjpVezx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DWmK0rHbVFjpVezx');
    }
  }

  sd_bGIm17o4L3x8p2tw(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_8lA9ElTu24uLxdgb(bh);
      //appendnew_next_sd_bGIm17o4L3x8p2tw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bGIm17o4L3x8p2tw');
    }
  }

  async sd_8lA9ElTu24uLxdgb(bh) {
    try {
      if (
        this.sdService.operators['se'](
          this.page.result.message,
          'Card added successfully',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_gYfK38WiDIbNzUGv(bh);
      } else {
        bh = await this.sd_AqvxXvGt275V91gS(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8lA9ElTu24uLxdgb');
    }
  }

  sd_gYfK38WiDIbNzUGv(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      page.cardForm.reset();
      bh = this.sd_nrTVfM7IvZi4HNe7(bh);
      //appendnew_next_sd_gYfK38WiDIbNzUGv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gYfK38WiDIbNzUGv');
    }
  }

  sd_nrTVfM7IvZi4HNe7(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Card added successfully', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_nrTVfM7IvZi4HNe7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nrTVfM7IvZi4HNe7');
    }
  }

  sd_AqvxXvGt275V91gS(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Something went wrong', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_AqvxXvGt275V91gS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AqvxXvGt275V91gS');
    }
  }

  sd_4VR3gyyfD9IIVoOS(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('All fields are required', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_4VR3gyyfD9IIVoOS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4VR3gyyfD9IIVoOS');
    }
  }

  sd_bp1E912KK9TDon5T(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_PQd1EltM0PL92j6R(bh);
      //appendnew_next_sd_bp1E912KK9TDon5T
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bp1E912KK9TDon5T');
    }
  }

  sd_PQd1EltM0PL92j6R(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Something went wrong', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_PQd1EltM0PL92j6R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PQd1EltM0PL92j6R');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      this.sd_Yln1mf7JJ2veF8X5(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_Yln1mf7JJ2veF8X5(bh) {
    const nodes = ['sd_f26m2C5nM3orrPem'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_bp1E912KK9TDon5T(bh);
      //appendnew_next_sd_Yln1mf7JJ2veF8X5
      return true;
    }
    return false;
  }
  //appendnew_flow_registerComponent_Catch
}
