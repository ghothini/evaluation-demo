// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { registerComponent } from 'app/components/register.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-landing',
  templateUrl: './landing.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class landingComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_IyWLMfwB7365oMvs(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_IyWLMfwB7365oMvs(bh) {
    try {
      bh = this.sd_sf6SVLHQZghaqi1j(bh);
      //appendnew_next_sd_IyWLMfwB7365oMvs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IyWLMfwB7365oMvs');
    }
  }

  editItem(item: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { item };
      bh.local = {};
      bh = this.sd_UrdHOtaUFUayeco3(bh);
      //appendnew_next_editItem
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dBBFMOIb3BKX4l2n');
    }
  }

  deleteItem(item: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { item };
      bh.local = {};
      bh = this.sd_RIEhiE3FrKYP0g2N(bh);
      //appendnew_next_deleteItem
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mi7WNiGTsnUIYXts');
    }
  }

  getCards(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_GAW34YyIqF5KrsWD(bh);
      //appendnew_next_getCards
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Es4vsdfZ42mJKxzG');
    }
  }
  //appendnew_flow_landingComponent_start

  sd_sf6SVLHQZghaqi1j(bh) {
    try {
      this.page.ssdURL = undefined;
      this.page.showSpinner = false;
      bh = this.sd_c4TARBQ5mYGuZWal(bh);
      //appendnew_next_sd_sf6SVLHQZghaqi1j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sf6SVLHQZghaqi1j');
    }
  }

  sd_c4TARBQ5mYGuZWal(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_NVAt11xtijlJcHp2(bh);
      //appendnew_next_sd_c4TARBQ5mYGuZWal
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c4TARBQ5mYGuZWal');
    }
  }

  sd_NVAt11xtijlJcHp2(bh) {
    try {
      let outputVariables = this.getCards();

      //appendnew_next_sd_NVAt11xtijlJcHp2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NVAt11xtijlJcHp2');
    }
  }

  sd_UrdHOtaUFUayeco3(bh) {
    try {
      const registerDialog = this.__page_injector__.get(MatDialog);
      const registerDialogRef = registerDialog.open(registerComponent, {
        data: bh.input.item,
        height: '80%',
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UrdHOtaUFUayeco3');
    }
  }

  sd_RIEhiE3FrKYP0g2N(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + '/delete-card';
      bh.body = bh.input.item;
      page.showSpinner = true;
      bh = this.sd_M5oizHnjUo7CFFje(bh);
      //appendnew_next_sd_RIEhiE3FrKYP0g2N
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RIEhiE3FrKYP0g2N');
    }
  }

  async sd_M5oizHnjUo7CFFje(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'delete',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_q33YLLwtzq19GHWK(bh);
      //appendnew_next_sd_M5oizHnjUo7CFFje
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M5oizHnjUo7CFFje');
    }
  }

  sd_q33YLLwtzq19GHWK(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_2ptAaygDDWTwlGpq(bh);
      //appendnew_next_sd_q33YLLwtzq19GHWK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q33YLLwtzq19GHWK');
    }
  }

  async sd_2ptAaygDDWTwlGpq(bh) {
    try {
      if (
        this.sdService.operators['se'](
          this.page.result.message,
          'Card deleted successfully',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_s880PO8wTOyHn5Bq(bh);
      } else {
        bh = await this.sd_Nr9cUe07bkw1rQpy(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2ptAaygDDWTwlGpq');
    }
  }

  sd_s880PO8wTOyHn5Bq(bh) {
    try {
      let outputVariables = this.getCards();

      bh = this.sd_yE17jeXyswjjc05a(bh);
      //appendnew_next_sd_s880PO8wTOyHn5Bq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s880PO8wTOyHn5Bq');
    }
  }

  sd_yE17jeXyswjjc05a(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Card deleted successfully', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_yE17jeXyswjjc05a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yE17jeXyswjjc05a');
    }
  }

  sd_Nr9cUe07bkw1rQpy(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Something went wrong', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_Nr9cUe07bkw1rQpy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Nr9cUe07bkw1rQpy');
    }
  }

  sd_GAW34YyIqF5KrsWD(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + '/get-cards';
      page.showSpinner = true;
      bh = this.sd_Ny708W9WCeGxiubR(bh);
      //appendnew_next_sd_GAW34YyIqF5KrsWD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GAW34YyIqF5KrsWD');
    }
  }

  async sd_Ny708W9WCeGxiubR(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_6FlkidG2rVWaVcl7(bh);
      //appendnew_next_sd_Ny708W9WCeGxiubR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ny708W9WCeGxiubR');
    }
  }

  sd_6FlkidG2rVWaVcl7(bh) {
    try {
      const page = this.page;
      page.cardItems = page.result;
      page.showSpinner = false;
      //appendnew_next_sd_6FlkidG2rVWaVcl7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6FlkidG2rVWaVcl7');
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
    throw e;
  }
  //appendnew_flow_landingComponent_Catch
}
