var angArray = new Array(5);
angArray[0] = 1.570;
angArray[1] = 1.046;
angArray[2] = 0.785;
angArray[3] = 0.523;
angArray[4] = 0.314;
var power = 15;
var count = 2;
var ang = angArray[count];

function set_fraction(fraction,time) {
	angY = Math.sin(ang);
	angZ = Math.cos(ang);
	pos_changed[1] = 1 + angY * Math.sin(fraction * Math.PI) * power;
	pos_changed[2] = -1 -angZ * fraction * power * 3;
}

function set_incpower(isToSet,time) {
	if (isToSet == false) {
		power = Math.min( power+5,25 );
		power_fraction_changed = (power - 5) / 20;
	}
}

function set_decpower(isToSet,time) {
	if (isToSet == false) {
		power = Math.max( 5,power-5 );
		power_fraction_changed = (power - 5) / 20;
	}
}

function set_incangle(isToSet,time) {
	if (isToSet == false) {
		count = Math.min( count+1 , 4 );
		ang = angArray[count];
		angle_fraction_changed = count / 4;
	}
}

function set_decangle(isToSet,time) {
	if (isToSet == false) {
		count = Math.max( 0 , count-1 );
		ang = angArray[count];
		angle_fraction_changed[3] = count / 4;
	}
}
