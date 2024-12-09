import {
	ChangeDetectionStrategy,
	Component,
	inject,
	OnChanges,
	OnInit,
	ViewEncapsulation,
} from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { TabMenuModule } from "primeng/tabmenu";
import { CommonModule } from "@angular/common";
import { MenuItem } from "primeng/api";
import { MegaMenuItem } from "primeng/api";
import { MegaMenuModule } from "primeng/megamenu";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [RouterModule, TabMenuModule, CommonModule, MegaMenuModule],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.css",
	encapsulation: ViewEncapsulation.Emulated,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
	private readonly _router = inject(Router);

	menuItems: MenuItem[] | undefined;
	megaMenuItems: MegaMenuItem[] | undefined;

	ngOnInit() {



	}


}
